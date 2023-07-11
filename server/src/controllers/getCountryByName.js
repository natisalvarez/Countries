
const getCountryByName = async (name) => {
const countryByName = await Country.findAll({
    where: {
      name: {
        [Op.like]: `%${name}%`
      }
    }
  })
  return countryByName
};

module.exports = getCountryByName;