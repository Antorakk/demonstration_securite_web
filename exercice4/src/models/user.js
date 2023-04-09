module.exports = {
    title:"Schéma Utilisateur",
    description:"Description d'un utilisateur",
    type:"object",
    properties:{
        nom:{
            type:"string"
        },
        prenom:{
            type:"string"
        },
        mail:{
            type:"string",
            format:"email",
        },
        password:{
            type:"string",
        },
        otp:{
            type:"string"
        }
    },
    required:["nom","prenom","mail","otp"],
    additionalProperties:false
};