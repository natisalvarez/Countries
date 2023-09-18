const { Country, Activity } = require('../db');

const getAllCountries = () => {
    const countries = Country.findAll(
        {
            atributes: ['id', 'name', 'flag', 'continent', 'subregion', 'area', 'coatOfArms', 'population'],
            include: [
                {model: Activity, attributes: ['name'], } ]
        } )
    return countries
};

module.exports = getAllCountries;

