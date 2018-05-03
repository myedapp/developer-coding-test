const path = require('path');
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

async function connect(dbUri) {
  if (!dbUri) {
    throw new Error('Database connection string is not set');
  }
  const con = await MongoClient.connect(dbUri);
  const dbName = dbUri.replace(/.*\//, '');
  const db = con.db(dbName);
  return { con, db };
}

async function importCollection(db, file) {
  const documents = loadDocuments(file);
  const colName = path.basename(file, '.json');
  const col = db.collection(colName);
  await col.deleteMany({});
  await col.insertMany(documents);
}

function loadDocuments(file) {
  const data = fs.readFileSync(file, { encoding: 'utf8' });
  const documents = JSON.parse(data);

  if (!Array.isArray(documents)) {
    throw new Error(`Invalid json file format: ${file}`);
  }

  return documents.map(item => transformObject(item));
}

function transformObject(obj) {
  if (!isObject(obj)) {
    return obj;
  }

  if (obj.hasOwnProperty('$oid')) {
    return new ObjectID(obj.$oid);
  }

  if (obj.hasOwnProperty('$date')) {
    return new Date(obj.$date);
  }

  let result;
  if (Array.isArray(obj)) {
    result = obj.map(el => transformObject(el));
  } else {
    result = {};
    for (const attr in obj) {
      result[attr] = transformObject(obj[attr]);
    }
  }

  return result;
}

function isObject(val) {
  return typeof val === 'object' && val !== null;
}

module.exports = { connect, importCollection };
