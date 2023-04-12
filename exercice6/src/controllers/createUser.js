import { insertOne } from "../services/db/crud.js";
import config from "../../config.json" assert { type : 'json' }
import { hashPwd } from "../utils/hash.js";
import { Validator } from "jsonschema";
import sanitize from "mongo-sanitize";
import schemaUser from '../models/user.js'
import { cryptData } from "../utils/crypt.js";

const users = config.tables.users
export const createUser = async (req,res) => {

    try {
        const cleanUser = sanitize(req.query)        
        const user = {
            nom:await cryptData(cleanUser.nom),
            prenom:await cryptData(cleanUser.prenom),
            mail:await cryptData(cleanUser.mail),
            password: await hashPwd(cleanUser.password)
        };

        let validator = new Validator();
        if (validator.validate(cleanUser,schemaUser).valid){
            insertOne(users,user);
            return res.status(200).json(user);
        }
        return res.status(400).send('Erreur, conflits')
        
    } catch (error) {
        throw error;
    }
}
