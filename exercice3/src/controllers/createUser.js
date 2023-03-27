const { insertOne } = require("../services/db/crud");
const { hashPwd } = require("../utils/hash");


const createUser = async (req,res) => {

    try {

        const user = {
            "nom":req.query.nom,
            "prenom":req.query.prenom,
            "mail":req.query.mail,
            "password": await hashPwd(req.query.password),
            "otp" : ""
        };

        insertOne('exo3',user);
        return res.status(200).json(user);
        
    } catch (error) {
        throw error;
    }
}


module.exports = createUser;