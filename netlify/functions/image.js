const { ObjectId, GridFSBucket } = require('mongodb');
const { getDb } = require('./_db');

exports.handler = async (event) => {
  try {
    const id = event.queryStringParameters?.id;
    if (!id || !ObjectId.isValid(id)) return { statusCode: 400, body: 'Invalid image id' };
    const db = await getDb();
    const bucket = new GridFSBucket(db, { bucketName: 'chaithanyaImages' });
    if (event.httpMethod === 'DELETE') {
      try {
        await bucket.delete(new ObjectId(id));
        return { statusCode: 200, body: JSON.stringify({ success: true }) };
      } catch (e) {
        if (e?.code === 'ENOENT' || /not found/i.test(String(e?.message || ''))) {
          return { statusCode: 404, body: 'Image not found' };
        }
        throw e;
      }
    }
    const files = await db.collection('chaithanyaImages.files').findOne({ _id: new ObjectId(id) });
    if (!files) return { statusCode: 404, body: 'Image not found' };
    const chunks = [];
    await new Promise((resolve, reject) => {
      const stream = bucket.openDownloadStream(new ObjectId(id));
      stream.on('data', chunk => chunks.push(chunk));
      stream.on('end', resolve);
      stream.on('error', reject);
    });
    const buffer = Buffer.concat(chunks);
    return {
      statusCode: 200,
      isBase64Encoded: true,
      headers: {
        'Content-Type': files.metadata?.contentType || 'application/octet-stream',
        'Cache-Control': 'public, max-age=31536000, immutable'
      },
      body: buffer.toString('base64')
    };
  } catch (e) {
    console.error('MongoDB GridFS image read failed:', e);
    return { statusCode: 500, body: 'Image unavailable' };
  }
};
