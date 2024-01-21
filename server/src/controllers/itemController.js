const { getItemValueFromDb, getItemValuesFromDb } = require("../services/itemService");

const getItem = async (id) => {
  const values = await getItemValueFromDb(id);
  return values;
}

const getItems = async (arr) => {
  const values = await getItemValuesFromDb(arr);
  return values;
}

module.exports = { getItem, getItems }