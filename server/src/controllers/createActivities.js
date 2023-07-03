
const { Activity } = require ('../db'); // el modelo se importa desde DB

const createActivities = async (name, dificulty, duration, season) => {
const newActivity = await Activity.create({
    name, dificulty, duration, season
})
return newActivity
};

module.exports = createActivities;