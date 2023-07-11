const {Activity, Country} = require ('../db');

const getCountryById = async (id) => {
const countryById = await Country.findByPk(id, {
    
    Includes:
    {
        model: Activity, 
        attributes: ['id, name, difficulty, duration, season']
    }
    })
    return countryById

};

module.exports = getCountryById;