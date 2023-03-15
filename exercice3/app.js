const express = require('express')
const bodyparser=require('body-parser');
const nodemailer=require('nodemailer');
const otpGenerator = require('otp-generator')
const path = require('path');
const { checkUser,hashPwd } = require('./hash');

const app = express()
require('dotenv').config();

app.use(express.json());
app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());
const publicPath = path.join(__dirname+'/public')
app.use(express.static(publicPath))


const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false })


const { Pool } = require('pg');
const pool = new Pool({
    host:'127.0.0.1',
    user:'antorak',
    password:'antorak123',
    database:'testsecuweb',
    port:'5433'
})

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

app.get('/',(req,res) =>{
    res.sendFile(__dirname+'/public/form.html')
})

app.post('/send-mail',(req,res) => {

    
    let email = req.body.mail;
    pool.query(`Select * from users where email='${email}'`).then(
        (result) =>{
            let hashpwd = result.rows[0].pwd
            console.log(hashpwd)
            let pwd = req.body.password
            checkUser(pwd,hashpwd).then(function(result){
                if (result){
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
                        // console.log(`Message envoyé : ${info.messageId}`);
                        // console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
                    })
                    res.sendFile(__dirname+'/public/otp.html')
                }
                else{
                    console.log('Mdp incorrect')
                }
            })
        });
})

app.post('/verify',(req,res) => {
    if (req.body.otp == otp) {
        res.sendFile(__dirname+'/public/edit.html')
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


