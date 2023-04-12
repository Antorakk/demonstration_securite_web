import config from "../../config.json" assert { type : 'json' }
import { validationResult } from "express-validator";
import sanitize from "mongo-sanitize";
import { checkUser } from "../utils/hash.js";
import { findOne } from "../services/db/crud.js";
import { cryptData , decryptData } from "../utils/crypt.js";

const users = config.tables.users
export const loginUser = async (req,res) => {

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        
        const user = {
            mail: await cryptData(req.body.mail),
            password : req.body.password
        };
        const findResult = await findOne(users,{"mail":user.mail});
        const isValidPassword = await checkUser(user.password,findResult.password)

        if (isValidPassword){
            return res.render("profile",{_idUser:findResult._id})
        }
        else{
            return res.send("Utilisateur inexistant !")
        }
    } catch (error) {
        throw error;
    }
}
