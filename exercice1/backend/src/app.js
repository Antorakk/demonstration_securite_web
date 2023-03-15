const express = require('express')
const app = express();
const helmet = require('helmet');

// app.get('/',(req,res)=> res.send('Bienvenue sur notre API de sécu web'));
app.use(express.json());

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/formulaire.html')
})

// app.post('/',urlencodedParser,(req,res)=>{
//     res.sendStatus(200);
// })
app.use(helmet());
// applique les protections XSS par défaut incluses dans helmet
// qui nettoieront les entrées utilisateur pour empêcher l'exécution de code malveillant.
app.use(require('./routes/index.js'));
app.listen(3000);
console.log('Server on port 3000');