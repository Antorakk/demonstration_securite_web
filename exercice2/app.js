const express = require('express')
const bodyparser=require('body-parser');
const nodemailer=require('nodemailer');
const bcrypt = require('bcrypt');
const otpGenerator = require('otp-generator')
const path = require('path')

const app = express()
require('dotenv').config();

app.use(express.json());
app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());
const publicPath = path.join(__dirname+'/public')
app.use(express.static(publicPath))

const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false })

let transporter = nodemailer.createTransport({
    host:"localhost",
    port:465,
    secure:true,
    service:'gmail',
    auth:{
        user:process.env.USER_MAIL,
        pass:process.env.USER_PWD
    }
})

app.get('/',(req,res) =>{
    res.sendFile(__dirname+'/public/form.html')
})

app.post('/send-mail',(req,res) => {

    let email = req.body.mail;

    const mailOptions = {
        from:"supportIUT@gmail.com",
        to: email,
        subject : "Otp for registration : " ,
        html:"<h3> OTP for account verification is </h3><h1>"+otp+"</h1>"
    }

    transporter.sendMail(mailOptions,(error,info) => {
        if (error){
            console.log(error)
        }
        console.log(`Message envoyé : ${info.messageId}`);
        console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
    })
    res.sendFile(__dirname+'/public/otp.html')
})

app.post('/verify',(req,res) => {
    if (req.body.otp == otp) {
        res.send("Connexion réussi !");
    }
    else {
        res.send('Incorrect ! ')
    }
})




// Gestion du PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server on port : ${PORT}`)
});


