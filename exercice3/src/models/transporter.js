const nodemailer = require('nodemailer');
require('dotenv').config();


let transporter = nodemailer.createTransport({
    host:"localhost",
    port:465,
    secure:true,
    service:'gmail',
    auth:{
        user : process.env.USER_MAIL,
        pass : process.env.USER_PWD
    }
})

module.exports = { transporter };