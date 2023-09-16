const axios = require("axios");
const server = require("./src/server");
const { Country } = require('./src/db.js');
const { conn } = require('./src/db.js');
const PORT = process.env.PORT || 3002; 

const getApi = async () => {
    const dbCountries = Country.findAll();
    if (!dbCountries.length) {
        const url = await axios.get("http://localhost:5000/countries");
        let urlCleaned = url.data.map((country) => {
            return {
                id: country.cca3,
                name: country.name.common,
                image: country.flags.svg,
                continent: country.continents[0],
                capital: country.capital ? country.capital[0] : "Capital",
                subregion: country.subregion ? country.subregion : "Subregion",
                area: country.area,
                population: country.population
            };
        });

        for (let i = 0; i < urlCleaned.length; i++) {
            await Country.findOrCreate({
                where: { name: urlCleaned[i].name },
                defaults: urlCleaned[i],
            });
        }
        console.log("La base de datos ha sido actualizada")
    }
};

conn.sync({ alter: true })
  .then(async () => {
    await getApi();

    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error("Error during database synchronization:", error);
    process.exit(1); 
  });
