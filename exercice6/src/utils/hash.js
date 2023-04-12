import { hash , compare } from 'bcrypt'
const saltRounds = 10;

export const hashPwd = async(password) => {
    return new Promise((resolve) => {
            hash(password, saltRounds, (err, hash) => {
                resolve(hash)
            })
        }
    )
}

export const checkUser = async(password,hash) => {
    return new Promise((resolve) => {
        compare(password, hash, (err, res) => {
            resolve(res)
        })
    }
    ) 
}