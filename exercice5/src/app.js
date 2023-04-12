const express = require('express')
const bodyparser = require('body-parser')
const app = express();
const path = require('path')
const fs = require('fs');

app.use(express.json());
app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());
const publicPath = path.join(__dirname,'..','public')
app.use(express.static(publicPath))




app.get('/',(req,res)=>{
    res.sendFile(publicPath + '/formulaire.html')
})


app.get('/modif', (req, res) => {
    
    const filePath = path.join(__dirname, 'logs', 'logs_modif.json');
    
    // Lire le contenu du fichier JSON
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erreur lors de la lecture du fichier JSON');
      } else {
        // Renvoyer le contenu du fichier JSON au navigateur
        res.set('Content-Type', 'application/json');
        res.send(data);
      }
    });
  });




app.use(require('./routes/index.js'));
app.listen(3000);
console.log('Server on port 3000');