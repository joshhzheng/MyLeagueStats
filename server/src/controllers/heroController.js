const { getHeroValuesFromDb } = require("../services/heroService");

const getHero = async (id) => {
  const values = await getHeroValuesFromDb(id);
  return values;
}

module.exports = { getHero }