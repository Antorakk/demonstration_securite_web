const { insertOne } = require("../services/db/crud");
const { hashPwd } = require("../utils/hash");
const config = require('../../config.json');
const sanitize = require("mongo-sanitize");
const { Validator } = require("jsonschema");
const schemaUser = require('../models/user')

const users = config.tables.users
const createUser = async (req,res) => {

    try {

        const cleanUser = sanitize(req.query)
        const user = {
            "nom":cleanUser.nom,
            "prenom":cleanUser.prenom,
            "mail":cleanUser.mail,
            "password": await hashPwd(cleanUser.password),
            "otp" : ""
        };
        let validator = new Validator();
        if (validator.validate(user,schemaUser).valid){
            insertOne(users,user);
            return res.status(200).json(user);
        }
        return res.status(400).send('Erreur, conflits')
        
    } catch (error) {
        throw error;
    }
}


module.exports = createUser;