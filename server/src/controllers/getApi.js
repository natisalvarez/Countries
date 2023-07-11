const axios = require('axios');
const { Country } = require('../db');

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

module.exports = getApi;