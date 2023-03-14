const bcrypt = require('bcrypt');
const { callbackPromise } = require('nodemailer/lib/shared');
const saltRounds = 10;


const hashPwd = async(password) => {
    return new Promise((resolve) => {
            bcrypt.hash(password, saltRounds, (err, hash) => {
                resolve(hash)
            })
        }
    )
}

const checkUser = async(username,password,hash) => {
    return new Promise((resolve) => {
        bcrypt.compare(password, hash, (err, res) => {
            resolve(res)
        })
    }
    ) 
}
let pwd = 'pwdantoine'
let username = 'antorak'
hashPwd(pwd).then(function(result){
        console.log(result)
        checkUser('antorak',pwd,'banane').then(function(result){
            console.log(result)
        })
    })


module.exports = {
    checkUser,
    hashPwd
}