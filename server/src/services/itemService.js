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

const getItemValuesFromDb = async (itemArr) => {
  const getItems = async (itemArr) => {
    try {
      await client.connect();
      const database = client.db("LeagueData");
      const items = database.collection("items");
      const query = {id: {$in: itemArr.map(item => item)}};
      const projection = { _id: 0, id: 1, name: 1, image: 1, gold: 1 };
      const cursor = await items.find(query).project(projection);

      const result = await cursor.toArray();

      const idMapping = {};
      result.forEach(item => {
        idMapping[item.id] = item;
      });
      return idMapping;
    } finally {
      await client.close();
    }
  };
  const result = await getItems(itemArr);
  return result;
};

module.exports = {
  getItemValueFromDb,
  getItemValuesFromDb
};
