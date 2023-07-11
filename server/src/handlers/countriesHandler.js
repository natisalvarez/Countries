
const getAllCountries = require ('../controllers/getAllCountries');
const getCountryById = require ('../controllers/getCountryById');
const getCountryByName = require ('../controllers/getCountryByName');

const getAllCountriesHandler = async(req, res) => {
  try {
  const allCountries = await getAllCountries();
  res.status(200).json (allCountries)
  } catch (error) {
  return res.status(400).json({error: error.message})  
  }
};

const getCountryByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const country = await getCountryById (id)
    res.status(200).json(country);    
    } catch (error) {
    res.status(400).json({error: error.message})    
    }
};

const getCountryByNameHandler =  async (req,res) => {
const {name} = req.query; 
try {
const country = await getCountryByName(name);
res.status(200).json(country);
} catch (error) {
  res.status(400).json({error: error.message})
}
};

/* http://localhost:3001/countries?name=Argentina */

module.exports = {
  getAllCountriesHandler, 
  getCountryByIdHandler,
  getCountryByNameHandler
};
