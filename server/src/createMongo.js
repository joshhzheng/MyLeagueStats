require('dotenv').config();

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(process.env.MONGO_URI, function(err, db) {
  if (err) throw err;
  console.log("Successfully connected to database!");
  db.close();
});