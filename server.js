const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const { MongoClient, GridFSBucket, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || '127.0.0.1';

app.disable('x-powered-by');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.CORS_ORIGIN || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Cache-Control');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

app.use(express.json({ limit: '10mb' }));
app.use(express.static(__dirname, {
  etag: true,
  maxAge: process.env.NODE_ENV === 'production' ? '1h' : 0
}));

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5.5 * 1024 * 1024 }
});

let mongoClient;
let mongoDb;
let mongoPromise;

async function getMongoDb() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI is not configured');

  if (mongoDb) return mongoDb;

  if (!mongoPromise) {
    mongoClient = new MongoClient(uri, {
      maxPoolSize: Number(process.env.MONGO_MAX_POOL_SIZE || 10),
      minPoolSize: 0,
      serverSelectionTimeoutMS: 8000,
      connectTimeoutMS: 8000,
      socketTimeoutMS: 15000
    });

    mongoPromise = mongoClient.connect()
      .then(client => {
        mongoDb = client.db(process.env.MONGODB_DB || 'chaithanya');
        return mongoDb;
      })
      .catch(err => {
        mongoPromise = null;
        mongoClient = null;
        throw err;
      });
  }

  return mongoPromise;
}

function storeCollection(db) {
  return db.collection('chaithanyaLiveStore');
}

async function findStoreDocument(col) {
  let doc = await col.findOne({ _id: 'main' }, { maxTimeMS: 5000 });
  if (doc) return doc;

  doc = await col.findOne({ type: 'main' }, { maxTimeMS: 5000 });
  if (doc) return doc;

  return col.findOne({
    $or: [
      { products: { $exists: true } },
      { 'data.products': { $exists: true } },
      { categories: { $exists: true } },
      { 'data.categories': { $exists: true } }
    ]
  }, { maxTimeMS: 5000 });
}

function unwrapStore(doc) {
  if (!doc) return null;
  let data = doc;
  if (doc.data && typeof doc.data === 'object' && !Array.isArray(doc.data)) data = doc.data;
  else if (doc.store && typeof doc.store === 'object' && !Array.isArray(doc.store)) data = doc.store;

  const out = { ...data };
  delete out._id;
  delete out.data;
  delete out.store;
  return out;
}

app.get('/api/health', async (req, res) => {
  try {
    const db = await getMongoDb();
    await db.command({ ping: 1 });
    res.setHeader('Cache-Control', 'no-store');
    res.json({ ok: true, database: db.databaseName, service: 'chaithanya', time: new Date().toISOString() });
  } catch (error) {
    res.status(503).json({ ok: false, error: error.message });
  }
});

app.get('/api/store', async (req, res) => {
  try {
    const db = await getMongoDb();
    const doc = await findStoreDocument(storeCollection(db));
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
    if (!doc) return res.json({ exists: false, data: null });
    res.json({
      exists: true,
      data: unwrapStore(doc),
      sourceId: String(doc._id),
      sourceUpdatedAt: doc.updatedAt || null
    });
  } catch (error) {
    console.error('MongoDB GET /api/store failed:', error);
    res.status(500).json({ error: 'Database unavailable', detail: error.message });
  }
});

app.put('/api/store', async (req, res) => {
  try {
    const db = await getMongoDb();
    const incoming = req.body && typeof req.body === 'object' ? { ...req.body } : {};
    delete incoming._id;
    delete incoming.sourceId;

    if (!Object.keys(incoming).length) {
      return res.status(400).json({ error: 'Empty store payload' });
    }

    const updatedAt = new Date();
    await storeCollection(db).updateOne(
      { _id: 'main' },
      { $set: { ...incoming, updatedAt }, $setOnInsert: { createdAt: updatedAt } },
      { upsert: true, maxTimeMS: 8000 }
    );

    const verify = await storeCollection(db).findOne(
      { _id: 'main' },
      { projection: { _id: 1, updatedAt: 1 }, maxTimeMS: 5000 }
    );
    if (!verify) throw new Error('MongoDB write verification failed');

    res.setHeader('Cache-Control', 'no-store');
    res.json({ success: true, updatedAt: updatedAt.toISOString() });
  } catch (error) {
    console.error('MongoDB PUT /api/store failed:', error);
    res.status(500).json({ error: 'Database update failed', detail: error.message });
  }
});

app.post('/api/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No image selected' });
    if (!String(req.file.mimetype || '').startsWith('image/')) {
      return res.status(400).json({ error: 'Only image files are allowed' });
    }

    const db = await getMongoDb();
    const bucket = new GridFSBucket(db, { bucketName: 'chaithanyaImages' });
    const name = String(req.file.originalname || 'upload')
      .replace(/[^a-zA-Z0-9._-]/g, '_')
      .slice(0, 180) || 'upload';

    const stream = bucket.openUploadStream(name, {
      metadata: {
        contentType: req.file.mimetype,
        originalName: req.file.originalname,
        uploadedAt: new Date()
      }
    });

    await new Promise((resolve, reject) => {
      stream.on('finish', resolve);
      stream.on('error', reject);
      stream.end(req.file.buffer);
    });

    res.setHeader('Cache-Control', 'no-store');
    res.json({
      url: `/api/image?id=${stream.id.toString()}`,
      imageId: stream.id.toString(),
      storedIn: 'MongoDB GridFS'
    });
  } catch (error) {
    console.error('MongoDB GridFS upload failed:', error);
    res.status(500).json({ error: 'MongoDB image upload failed', detail: error.message });
  }
});

app.get('/api/image', async (req, res) => {
  try {
    const id = req.query.id;
    if (!id || !ObjectId.isValid(id)) return res.status(400).send('Invalid image id');

    const db = await getMongoDb();
    const objectId = new ObjectId(id);
    const file = await db.collection('chaithanyaImages.files').findOne({ _id: objectId });
    if (!file) return res.status(404).send('Image not found');

    res.setHeader('Content-Type', file.metadata?.contentType || 'application/octet-stream');
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    GridFSBucket.prototype.openDownloadStream; // keep GridFSBucket available for older Node loaders
    new GridFSBucket(db, { bucketName: 'chaithanyaImages' })
      .openDownloadStream(objectId)
      .on('error', () => {
        if (!res.headersSent) res.status(500).end('Image unavailable');
        else res.end();
      })
      .pipe(res);
  } catch (error) {
    console.error('MongoDB GridFS image read failed:', error);
    if (!res.headersSent) res.status(500).send('Image unavailable');
  }
});

app.delete('/api/image', async (req, res) => {
  try {
    const id = req.query.id;
    if (!id || !ObjectId.isValid(id)) return res.status(400).json({ error: 'Invalid image id' });

    const db = await getMongoDb();
    await new GridFSBucket(db, { bucketName: 'chaithanyaImages' }).delete(new ObjectId(id));
    res.json({ success: true });
  } catch (error) {
    if (/not found/i.test(String(error?.message || ''))) {
      return res.status(404).json({ error: 'Image not found' });
    }
    console.error('MongoDB GridFS image delete failed:', error);
    res.status(500).json({ error: 'Image delete failed' });
  }
});

function cleanEmails(emails) {
  return [...new Set((emails || [])
    .map(e => String(e || '').trim().toLowerCase())
    .filter(e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)))];
}

function createTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error('SMTP is not configured. Add SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASS in .env');
  }
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: String(SMTP_PORT) === '465',
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  });
}

app.post('/api/send-notification-email', async (req, res) => {
  try {
    const emails = cleanEmails(req.body.emails);
    const subject = String(req.body.subject || 'CHAITHANYA Notification').trim();
    const message = String(req.body.message || '').trim();

    if (!emails.length) return res.status(400).json({ success: false, error: 'No valid registered user emails found.' });
    if (!message) return res.status(400).json({ success: false, error: 'Message is empty.' });

    const transporter = createTransporter();
    const from = process.env.MAIL_FROM || process.env.SMTP_USER;

    await transporter.sendMail({
      from: `CHAITHANYA <${from}>`,
      to: from,
      bcc: emails,
      subject,
      text: message,
      html: `<div style="font-family:Arial,sans-serif;background:#000;color:#fff;padding:24px;border-radius:18px"><h2 style="margin-top:0">${subject.replace(/[<>&]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;'}[c]))}</h2><p style="white-space:pre-line;line-height:1.6">${message.replace(/[<>&]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;'}[c]))}</p><hr style="border-color:#333"><p style="color:#aaa">CHAITHANYA Official</p></div>`
    });

    res.json({ success: true, sent: emails.length });
  } catch (error) {
    console.error('Notification email failed:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Express 5-safe SPA fallback. API routes above are matched first.
app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

async function shutdown(signal) {
  console.log(`${signal} received. Shutting down...`);
  try {
    if (mongoClient) await mongoClient.close();
  } catch (e) {
    console.error('MongoDB close failed:', e.message);
  }
  process.exit(0);
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

app.listen(PORT, HOST, () => {
  console.log(`CHAITHANYA running on http://${HOST}:${PORT}`);
});
