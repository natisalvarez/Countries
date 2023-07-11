
const getApi = require ('../controllers/getApi');

const getApiHandler = async (req,res) =>{
    try {
        const api = await getApi();
        return res.status(200).json(api)
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
}

module.exports = getApiHandler;