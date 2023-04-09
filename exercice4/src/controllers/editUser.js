const sanitize = require("mongo-sanitize");
const { Validator } = require("jsonschema");
const schemaUser = require('../models/user');
const { hashPwd } = require("../utils/hash");
const { findOne, updateOne } = require("../services/db/crud");
const config = require('../../config.json');
const { ObjectId } = require("mongodb");
const users = config.tables.users

const editUser = async (req,res) => {

    try {

        const dbUser = await findOne(users,{_id: new ObjectId(req.body.idItem)});
        const user = {
            prenom : req.body.prenom,
            nom : req.body.nom,
            password : await hashPwd(req.body.password),
            mail : req.body.mail,
        };

        sanitize(user);
        const updateUser = {
            $set:{
                prenom : user.prenom || dbUser.prenom,
                nom : user.nom || dbUser.nom,
                password : user.password || dbUser.password,
                mail : user.mail ||  dbUser.mail
            }
        };
        const filter = {_id:dbUser._id};
        const resultUpdate = await updateOne(users,filter,updateUser);

        res.status(200).send("utilisateur bien modifié !");

    } catch (error) {
        throw error
    }
}

module.exports = editUser