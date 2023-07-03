
const getApiHandler = async (req,res) => {
 try { 
  const api = await getApi ()
  res.status(200).json(api);    
  } catch (error) {
  res.status(400).json({error: error.message}) 
}
}; 

const getAllCountriesHandler = (req, res) => {
  res.status(200).json (`soy el getALLCountryHandler`)
};

const getCountryByIdHandler = (req, res) => {
  res.status(200).json (`soy el getCountryHandler`)
};

const getCountryByNameHandler = (req, res) => {
  res.status(200).json (`soy el get country by name`)
};

module.exports = {
  getApiHandler,
  getAllCountriesHandler, 
  getCountryByIdHandler,
  getCountryByNameHandler
};
/*
app.get('/', async (req, res) => {
    try {
      // Hacer la petición a la API de países
      const response = await axios.get('https://restcountries.com/v3/all');
  
      // Obtener los datos de los países de la respuesta
      const paises = response.data.map(pais => ({
        nombre: pais.name.common,
        codigoIso: pais.cca2,
        capital: pais.capital?.[0],
        idioma: Object.values(pais.languages)?.[0],
        moneda: Object.values(pais.currencies)?.[0]
      }));

    // Guardar los países en la base de datos
    await Pais.bulkCreate(paises);

    res.send('Países cargados correctamente en la base de datos.');
  } catch (error) {
    console.error('Error al cargar los países:', error);
    res.status(500).send('Error al cargar los países.');
  }
});

*/