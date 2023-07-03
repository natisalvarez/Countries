const { Router } = require('express');
const activitiesRoute = Router ();
const { getActivitiesHandler, postActivitiesHandler } = require ('../handlers/activitiesHandler');


activitiesRoute.get('/', getActivitiesHandler);
activitiesRoute.post('/', postActivitiesHandler);

module.exports = activitiesRoute; 