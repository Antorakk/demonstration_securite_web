const express = require('express');
const app = express();

app.engine('pug', require('pug').__express)
app.set("views",process.cwd()+"/src/views");
app.set("view engine","pug");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res) => {
    res.render('index');
})


module.exports = app;


