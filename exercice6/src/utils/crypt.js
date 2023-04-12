import { createHash, randomBytes , createCipheriv , createDecipheriv }  from 'crypto'
import dotenv from 'dotenv'
dotenv.config()

const algorithm = "AES-128-ECB";  // Algo utilisé pour encrypé les données
const key = Buffer.from(process.env.SECRET_KEY,'utf8');
const initialiseVector = Buffer.alloc(0);

export const cryptData = async (message) => {

    try {
        const cipher = createCipheriv(algorithm,key,initialiseVector);
        let encryptedData = cipher.update(message, "utf-8", "hex");
        encryptedData += cipher.final("hex");
        return encryptedData;
    } catch (error) {
        throw error;   
    }
}

export const decryptData = async (encryptedData) => {
    try {
        const decipher = createDecipheriv(algorithm,key,initialiseVector)
        let decryptedData = decipher.update(encryptedData, "hex", "utf-8");
        decryptedData += decipher.final("utf8");
        return decryptedData;   
    } catch (error) {
        throw error;   
    }
}
