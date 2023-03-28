const {connectTodB} = require('./services/db/connection.js')
app = require("./routes/index.js")
require('dotenv').config();



const createServer = () => {
  connectTodB()
  const PORT = process.env.PORT || 3000;
  app.listen(PORT);
  console.log(`Ecoute le port ${PORT}`);
}

createServer()