const { insertOne } = require("../services/db/crud");
const { hashPwd } = require("../utils/hash");
const config = require('../../config.json')


const users = config.tables.users


const createUser = async (req,res) => {

    try {
        const user = {
            "nom":req.query.nom,
            "prenom":req.query.prenom,
            "mail":req.query.mail,
            "password": await hashPwd(req.query.password),
            "otp" : ""
        };

        insertOne(users,user);
        return res.status(200).json(user);
        
    } catch (error) {
        throw error;
    }
}


module.exports = createUser;