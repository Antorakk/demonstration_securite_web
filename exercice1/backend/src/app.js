const express = require('express')
const bodyparser = require('body-parser')
const app = express();
const path = require('path')

app.use(express.json());
app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());
const publicPath = path.join(__dirname,'..','public')
app.use(express.static(publicPath))

app.get('/',(req,res)=>{
    res.sendFile(publicPath + '/formulaire.html')
})

app.use(require('./routes/index.js'));
app.listen(3000);
console.log('Server on port 3000');