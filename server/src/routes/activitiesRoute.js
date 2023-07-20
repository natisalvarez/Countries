const { Router } = require('express');
const activitiesRoute = Router ();
const { getActivitiesHandler, postActivitiesHandler, deleteActivityHandler } = require ('../handlers/activitiesHandler');


activitiesRoute.get('/', getActivitiesHandler);
activitiesRoute.post('/', postActivitiesHandler);
activitiesRoute.delete('/:id', deleteActivityHandler);


module.exports = activitiesRoute; 