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

const checkUser = async(password,hash) => {
    return new Promise((resolve) => {
        bcrypt.compare(password, hash, (err, res) => {
            resolve(res)
        })
    }
    ) 
}

module.exports = {
    checkUser,
    hashPwd
}