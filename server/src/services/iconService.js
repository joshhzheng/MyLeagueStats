require('dotenv').config()

const MongoClient = require("mongodb").MongoClient;

const client = new MongoClient(process.env.MONGO_URI);

const getIconValuesFromDb = async (id) => {
  const getIcon = async (id) => {
    try {
      await client.connect();
      const database = client.db("LeagueData");
      const icons = database.collection("icons");

      const query = { id: id };
      const result = await icons.findOne(query);
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
