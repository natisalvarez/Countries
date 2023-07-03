const axios = require ('axios');

const getApi= async () => { 
  try {
   const countriesData = await axios.get("http://localhost:5000/countries");
   const data = countriesData.map(country => ({
    id: country.cca3, 
    name: country.name.official, 
    image: country.flags.svg, 
    continent: country.region,
    capital: country.capital,
    subregion: country.subtegion,
    area: country.area, 
    population: country.population
   }))
   return data 
  } catch (error) {
    return res.status(400).json ({ error: error.message });   
  }
};

const dataBase = async () => {
    try {
        const dbCountries = await countriesData ();
        await Country.bulkCreate(dbCountries);
        return dbCountries
    } catch (error) {
        return res.status(400).json ({ error: error.message })
    }
}

module.exports = {
    getApi,
    dataBase
};