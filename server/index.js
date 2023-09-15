const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const getApi = require('../server/src/controllers/getApi.js');

const PORT = process.env.PORT || 3002; 

conn.sync({ alter: true })
  .then(async () => {
    await getApi();

    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error("Error during database synchronization:", error);
    process.exit(1); 
  });
