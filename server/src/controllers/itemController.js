const { getItemValueFromDb } = require("../services/itemService");

const getItem = async (id) => {
  const values = await getItemValueFromDb(id);
  return values;
}

module.exports = { getItem }