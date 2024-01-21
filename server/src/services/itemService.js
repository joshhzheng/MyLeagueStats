require('dotenv').config()

const MongoClient = require("mongodb").MongoClient;

const client = new MongoClient(process.env.MONGO_URI);

const getItemValueFromDb = async (id) => {
  const getItem = async (id) => {
    try {
      await client.connect();
      const database = client.db("LeagueData");
      const items = database.collection("items");

      const query = { id: id };
      const result = await items.findOne(query);

      return result;
    } finally {
      await client.close();
    }
  };
  const result = await getItem(id);
  return result;
};

module.exports = {
    getItemValueFromDb
};
