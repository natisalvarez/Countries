const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false
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
        "name": "Hiking",
        "difficulty": 4,
        "duration": 4,
        "season": "summer",
        "countryId": "ARG"
  
    }
*/