const { Activity } = require('../db');


const createActivities = async (name, difficulty, duration, season, countryId) => {
let response = await Activity.create({ name, difficulty, duration, season });
await response.setCountries(countryId);

// Le agrego la propiedad 'countryId' al objeto response
response.dataValues.countryId = countryId;

console.log(response);
return response;
};


module.exports = createActivities;

/*
{
  {
  "name": "Climbing", 
  "duration": 5,
  "difficulty": 4,
  "countryId": "GTM", 
  "season": "summer"
}

*/