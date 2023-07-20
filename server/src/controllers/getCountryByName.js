const { Country, Activity } = require ('../db');
const { Op } = require ("sequelize");

const getCountryByName = async (name) => {
  if (name) {
    name = name.toLowerCase();
    const countries =  await Country.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
      });
    return countries;
  } else {
    const allCountries = await Country.findAll({
      attributes: ['id', 'name', 'image', 'continent', 'subregion', 'area', 'population'],
      include: [
        { model: Activity, attributes: ['name'] }
      ]
    });
    return allCountries;
  }
};

module.exports = getCountryByName;



