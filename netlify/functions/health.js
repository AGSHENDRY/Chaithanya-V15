const { getDb } = require('./_db');
exports.handler = async () => {
  try {
    const db = await getDb();
    await db.command({ ping: 1 });
    return { statusCode: 200, body: JSON.stringify({ ok: true, database: db.databaseName }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: e.message }) };
  }
};
