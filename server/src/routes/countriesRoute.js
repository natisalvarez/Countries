const { Router } = require('express');
const countriesRoute = Router();
const { getAllCountriesHandler, getCountryByIdHandler, getCountryByNameHandler }= require ('../handlers/countriesHandler');

countriesRoute.get("/", getAllCountriesHandler);
countriesRoute.get("/:id", getCountryByIdHandler);
countriesRoute.get("/name", getCountryByNameHandler); // /?name=nombre

module.exports = countriesRoute; 