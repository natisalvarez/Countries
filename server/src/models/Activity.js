const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        duration: {
            type: DataTypes.INTEGER
        },
        
        season: {
            type: DataTypes.ENUM('winter', 'spring', 'summer', 'autumn'),
            allowNull: false,
        }
    }, {
        hooks: {
            beforeValidate: (activity) => {
                if (activity.season) {
                    activity.season = activity.season.toLowerCase();
                }
            }
        },
        timestamps: false
    });
};

/*
   {
        "id": "1",
        "name": "Hiking",
        "difficulty": 4,
        "duration": 4,
        "season": "summer"
   }
*/