const {connectTodB} = require('./services/db/connexion')
app = require("./routes/index.js")
require('dotenv').config();
// var xss = require("xss");
// var html = xss('<script>alert("xss");</script>');
// console.log(html);


const createServer = () => {
  connectTodB()
  const PORT = process.env.PORT || 3000;
  app.listen(PORT);
  console.log(`Ecoute le port ${PORT}`);
}

createServer()