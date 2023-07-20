const createActivities = require ('../controllers/createActivities');
const getActivities = require ('../controllers/getActivities');
const deleteActivity = require ('../controllers/deleteActivities');

const getActivitiesHandler = async (req, res) => { 
    try {
        const allActivities = await getActivities();
        res.status(200).json (allActivities)
        } catch (error) {
        return res.status(400).json({error: error.message})  
        }
};

const postActivitiesHandler = async (req, res) => {   
  const { name, difficulty, duration, season, countryId } = req.body;
  console.log(req.body)
  /*if (!countryId || !name || !difficulty || !duration || !season) {
    return res.status(400).json({ error: 'Data cannot be null' });
  }*/

  try {
    const newActivity = await createActivities(name, difficulty, duration, season, countryId);
    return res.status(201).json(newActivity); // El 201 refiere a que se ha creado
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};


const deleteActivityHandler = async (req, res) => {
    const { id } = req.params;
    try {
      if (!id || isNaN(id)) {
        throw new Error("ID inválida o no numérica");
      }
      
      const resp = await deleteActivity(+id);
      if (!resp) {
        throw new Error("No se encontró ninguna actividad con el ID especificado");
      }
      
      res.status(200).json(resp);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

/*
 "name": "Argentina",
    "dificulty": "5", 
    "duration": "5", 
    "season": "winter"
*/

module.exports = {
    getActivitiesHandler,
    postActivitiesHandler,
    deleteActivityHandler
}