const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;
const getApi = require ('../server/src/controllers/getApi');

conn.sync({ alter: true })
.then( async() => {
  await getApi();

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
