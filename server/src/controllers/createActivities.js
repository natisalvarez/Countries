
const { Activity } = require ('../db'); // el modelo se importa desde DB

const createActivities = async (name, difficulty, duration, season) => {
const newActivity = await Activity.create({
    name, difficulty, duration, season
})
return newActivity
};

module.exports = createActivities;