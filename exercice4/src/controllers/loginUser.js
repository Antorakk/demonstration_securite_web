const sanitize = require("mongo-sanitize");
const { findOne } = require("../services/db/crud");
const config = require('../../config.json');
const { checkUser } = require("../utils/hash");
const users = config.tables.users


const loginUser = async (req,res) => {

    try {
        

        const user = {
            "mail": req.body.mail,
            "password" : req.body.password
        };
        sanitize(user); // Eviter les injections noSQL
        const findResult = await findOne(users,{"mail":user.mail});
        const isValidPassword = await checkUser(user.password,findResult.password)

        if (isValidPassword){
            return res.render("index")
        }
        else{
            return res.send("Utilisateur inexistant !")
        }
    } catch (error) {
        throw error;
    }
}

module.exports = loginUser