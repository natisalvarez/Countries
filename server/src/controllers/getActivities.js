const { Country, Activity } = require('../db');

getActivities = async () => {
    const activities = await Activity.findAll({
        include: [Country], // Incluir países relacionados
      });
        return activities
    };

module.exports = getActivities;

/*

 const { Activity } = require('../db');

getActivities = () => {
        const activities = Activity.findAll(
            {
                atributes: ['id', 'name', 'difficulty', 'duration', 'season' ],
            })
        return activities
    };

module.exports = getActivities;


*/