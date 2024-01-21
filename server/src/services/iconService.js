require('dotenv').config()

const MongoClient = require("mongodb").MongoClient;

const client = new MongoClient(process.env.MONGO_URI);

const getIconValuesFromDb = async (id) => {
  const getIcon = async (id) => {
    try {
      await client.connect();
      const database = client.db("LeagueData");
      const heros = database.collection("icons");

      const query = { id: id };
      const cursor = heros.findOne(query);
      const result = [];
      await cursor.forEach((entry) => {
        result.push(entry);
      });
      return result;
    } finally {
      await client.close();
    }
  };
  const result = await getIcon(id);
  return result;
};

module.exports = {
  getIconValuesFromDb
};
