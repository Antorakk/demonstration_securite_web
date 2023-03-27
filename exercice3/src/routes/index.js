const express = require('express');
const app = express();
const nodemailer=require('nodemailer');
const { checkUser,hashPwd } = require('../utils/hash');
const users = require('./users');

app.set("views",process.cwd()+"/src/views");
app.set("view engine","pug");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/',(req,res) => {
    res.render('form');
})

app.use(users);
module.exports = app;


