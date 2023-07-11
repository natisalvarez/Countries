const createActivities = require ('../controllers/createActivities');
const getActivities = require ('../controllers/getActivities')

const getActivitiesHandler = async (req, res) => { 
    try {
        const allActivities = await getActivities();
        res.status(200).json (allActivities)
        } catch (error) {
        return res.status(400).json({error: error.message})  
        }
};

const postActivitiesHandler = async (req, res) => {   
    try {
        const {name, difficulty, duration, season} = req.body;
        const newActivity = await createActivities(
            name, difficulty, duration, season);
    res.status(201).json(newActivity) //el 201 refiere a que se ha creado
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