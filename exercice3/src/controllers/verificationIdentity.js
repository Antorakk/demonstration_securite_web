const { transporter } = require("../models/transporter");
const { findOne, updateOne } = require("../services/db/crud");
const { hashPwd, checkUser } = require("../utils/hash");


const otpGenerator = require('otp-generator');

const verificationIdentity = async (req,res) => {
    try{
        const user = await findOne('exo3',{"mail":req.body.mail})

        const result = await checkUser(req.body.password,user.password);

        if (result){
            const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false })
            
            const updated = {$set:{"otp":otp}};
            const updatedResult = await updateOne('exo3',user,updated);
            
            const mailOptions = {
                from : "supportIUT@gmail.com",
                to : user.mail,
                subject : "Otp for registration : ",
                html:"<h3 OTP for account verification is </h3><h1>" + otp + "</h1>" 
            }
            
            transporter.sendMail(mailOptions,(error,info) =>{
                if (error){
                    throw error;
                }
            })

            return res.render('otpVerif');

        }
        return res.send('Mdp incorrect');

    } catch (e){
        throw e;
    }
}

const verificationOtp = async(req,res) => {

    const user = await findOne('exo3',{'otp':req.body.otp});
    if (user){
        return res.send('Connexion réussi');
    }
    return res.send('Otp Incorrect !')
}

module.exports = {
    verificationIdentity,
    verificationOtp
};