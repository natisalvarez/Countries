const { Country, Activity } = require('../db');

getActivities = () => {
        const activities = Activity.findAll(
            {
                atributes: ['id', 'name', 'difficulty', 'duration', 'season' ],
            })
        return activities
    };

module.exports = getActivities;