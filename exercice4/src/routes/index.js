const express = require('express');
const users = require('./users');
const app = express();
const mongoSanitize = require('express-mongo-sanitize');

app.engine('pug', require('pug').__express)
app.set("views",process.cwd()+"/src/views");
app.set("view engine","pug");

app.use(mongoSanitize())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res) => {
    res.render('index');
})

app.use(users)

module.exports = app;


