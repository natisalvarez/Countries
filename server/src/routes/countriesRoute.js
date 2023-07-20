const { Router } = require('express');
const countriesRoute = Router();
const {getCountryByIdHandler, getCountryByNameHandler }= require ('../handlers/countriesHandler');

//countriesRoute.get("/", getAllCountriesHandler);
countriesRoute.get("/:id", getCountryByIdHandler);
countriesRoute.get("/", getCountryByNameHandler); // /?name=nombre

module.exports = countriesRoute; 