const Busboy = require('busboy');
const { GridFSBucket } = require('mongodb');
const { getDb } = require('./_db');

function parseMultipart(event) {
  return new Promise((resolve, reject) => {
    const contentType = event.headers?.['content-type'] || event.headers?.['Content-Type'];
    if (!contentType) return reject(new Error('Missing multipart content type'));
    const bb = Busboy({ headers: { 'content-type': contentType } });
    let fileBuffer = null, fileName = 'upload', mimeType = 'application/octet-stream';
    bb.on('file', (name, file, info) => {
      const chunks = [];
      fileName = info.filename || 'upload';
      mimeType = info.mimeType || 'application/octet-stream';
      file.on('data', c => chunks.push(c));
      file.on('end', () => { fileBuffer = Buffer.concat(chunks); });
    });
    bb.on('finish', () => resolve({ fileBuffer, fileName, mimeType }));
    bb.on('error', reject);
    const body = event.isBase64Encoded ? Buffer.from(event.body || '', 'base64') : Buffer.from(event.body || '');
    bb.end(body);
  });
}

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, body: '' };
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  try {
    const { fileBuffer, fileName, mimeType } = await parseMultipart(event);
    if (!fileBuffer || !fileBuffer.length) return { statusCode: 400, body: JSON.stringify({ error: 'No image selected' }) };
    if (!String(mimeType).startsWith('image/')) return { statusCode: 400, body: JSON.stringify({ error: 'Only image files are allowed' }) };
    if (fileBuffer.length > 5.5 * 1024 * 1024) {
      return { statusCode: 413, body: JSON.stringify({ error: 'Image is too large. Please use an image under 5.5 MB.' }) };
    }

    const db = await getDb();
    const bucket = new GridFSBucket(db, { bucketName: 'chaithanyaImages' });
    const safeName = String(fileName || 'upload').replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 180) || 'upload';
    const uploadStream = bucket.openUploadStream(safeName, {
      metadata: {
        contentType: mimeType,
        originalName: fileName,
        uploadedAt: new Date()
      }
    });
    await new Promise((resolve, reject) => {
      uploadStream.on('finish', resolve);
      uploadStream.on('error', reject);
      uploadStream.end(fileBuffer);
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        url: `/api/image?id=${uploadStream.id.toString()}`,
        imageId: uploadStream.id.toString(),
        storedIn: 'MongoDB GridFS'
      })
    };
  } catch (e) {
    console.error('MongoDB GridFS upload failed:', e);
    return { statusCode: 500, body: JSON.stringify({ error: 'MongoDB image upload failed' }) };
  }
};
