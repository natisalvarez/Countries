const createActivities = require ('../controllers/createActivities');

const getActivitiesHandler = (req, res) => { 
    
    res.status(200).json(`activities handler`)
};

const postActivitiesHandler = async (req, res) => {   
    try {
        const {name, dificulty, duration, season} = req.body;
        const newActivity = await createActivities(
            name, dificulty, duration, season);
    res.status(200).json(newActivity)
    } catch (error) {
        res.status(400).json({error:error.message})
    };
};

/*
 "name": "Argentina",
    "dificulty": "5", 
    "duration": "5", 
    "season": "winter"
*/

module.exports = {
    getActivitiesHandler,
    postActivitiesHandler
}