
const getCountryById = require ('../controllers/getCountryById');
const getCountryByName = require ('../controllers/getCountryByName');


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
  res.status(400).send({error: `That country was not found`})
}
};


/* http://localhost:3001/countries/name?name=Argentina */

module.exports = {
  getCountryByIdHandler,
  getCountryByNameHandler
};
