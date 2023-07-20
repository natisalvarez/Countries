const { Activity } = require("../db");

const deleteActivity = async (id) => {
  const DeleteId = await Activity.destroy({ where: { id: id } });
  if(DeleteId){
    return `The activity ${id} was deleted`;
  }
  return "The activity was not found";
};

module.exports = deleteActivity;