const { getIconValuesFromDb } = require("../services/IconService");

const getIcon = async (id) => {
    const values = await getIconValuesFromDb(id);
    return values;
}

module.exports = { getIcon }