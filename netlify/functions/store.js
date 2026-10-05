const { getDb } = require('./_db');

const headers = {
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Origin': '*',
  'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
  'Pragma': 'no-cache',
  'Expires': '0'
};

function unwrapDocument(doc) {
  if (!doc || typeof doc !== 'object') return null;
  let candidate = doc;
  if (doc.data && typeof doc.data === 'object' && !Array.isArray(doc.data)) candidate = doc.data;
  else if (doc.store && typeof doc.store === 'object' && !Array.isArray(doc.store)) candidate = doc.store;
  const out = { ...candidate };
  delete out._id;
  delete out.data;
  delete out.store;
  return out;
}

async function findStoreDocument(col) {
  // Fast, deterministic lookups first. These should cover current and older formats.
  let doc = await col.findOne({ _id: 'main' }, { maxTimeMS: 4000 });
  if (doc) return doc;

  doc = await col.findOne({ type: 'main' }, { maxTimeMS: 4000 });
  if (doc) return doc;

  // Do NOT sort the whole collection: that can cause Netlify's function to time out
  // when an old/large collection has no index on updatedAt. Find one likely store doc.
  doc = await col.findOne({
    $or: [
      { 'data.products': { $exists: true } },
      { products: { $exists: true } },
      { 'data.categories': { $exists: true } },
      { categories: { $exists: true } },
      { 'data.modelGallery': { $exists: true } },
      { modelGallery: { $exists: true } },
      { heroContent: { $exists: true } },
      { 'data.heroContent': { $exists: true } },
      { seoContent: { $exists: true } },
      { 'data.seoContent': { $exists: true } }
    ]
  }, { maxTimeMS: 4000 });
  return doc || null;
}

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers, body: '' };

  try {
    const db = await getDb();
    const col = db.collection('chaithanyaLiveStore');

    if (event.httpMethod === 'GET') {
      const doc = await findStoreDocument(col);
      if (!doc) {
        return { statusCode: 200, headers, body: JSON.stringify({ exists: false, data: null }) };
      }
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          exists: true,
          data: unwrapDocument(doc),
          sourceId: String(doc._id),
          sourceUpdatedAt: doc.updatedAt || null
        })
      };
    }

    if (event.httpMethod === 'PUT' || event.httpMethod === 'POST') {
      const incoming = JSON.parse(event.body || '{}');
      delete incoming._id;
      delete incoming.sourceId;
      if (!incoming || !Object.keys(incoming).length) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'Empty store payload' }) };
      }
      const updatedAt = new Date();
      const result = await col.updateOne(
        { _id: 'main' },
        { $set: { ...incoming, updatedAt }, $setOnInsert: { createdAt: new Date() } },
        { upsert: true, maxTimeMS: 5000 }
      );
      // Verify the write immediately so the UI never reports a false success.
      const verify = await col.findOne({ _id: 'main' }, { maxTimeMS: 4000, projection: { _id: 1, updatedAt: 1 } });
      if (!verify) throw new Error('MongoDB write verification failed');
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true, matched: result.matchedCount, modified: result.modifiedCount, upserted: result.upsertedCount, updatedAt: updatedAt.toISOString() })
      };
    }

    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  } catch (error) {
    console.error('Store API error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Database unavailable', detail: error?.message || String(error) })
    };
  }
};
