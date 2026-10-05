const { MongoClient } = require('mongodb');
let clientPromise;

async function getDb() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI is not configured in Netlify Environment Variables');
  if (!clientPromise) {
    const client = new MongoClient(uri, {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 5000,
      socketTimeoutMS: 8000,
      maxPoolSize: 5
    });
    clientPromise = client.connect().catch(err => {
      clientPromise = null;
      throw err;
    });
  }
  const client = await clientPromise;
  return client.db('chaithanya');
}

module.exports = { getDb };
