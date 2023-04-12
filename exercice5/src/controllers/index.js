const { Pool } = require('pg');

const fs = require('fs');
const path = require('path');

const pool = new Pool({
    host:'localhost',
    user:'antoinebac',
    password:'bacquet',
    database:'Secu',
    port:'5432'
})

const getUsers = async(req,res) => {
    const response = await pool.query(`Select * from utilisateur`)
    res.status(200).json(response.rows);
}

const postUser = async(req,res) => {
    
    const { prenom,nom,mot_de_passe } = req.body
    const rank = '1'
    console.log(req.body)

    console.log(prenom,nom,mot_de_passe)

    pool.query(`INSERT INTO utilisateur (nom,prenom,mot_de_passe,rank) 
                VALUES ('${nom}','${prenom}','${mot_de_passe}','${rank}')`,
    (error, results) => {
        if (error) throw error;
        res.status(200).send(`User bien ajouté`);
      }
    )
}

const bestPostUser = async(req,res) => {
    
    const { prenom,nom,mot_de_passe } = req.body
    const rank = '1'
    console.log(req.body)

    console.log(prenom,nom,mot_de_passe)

    // La bonne version
    pool.query(`INSERT INTO utilisateur (nom,prenom,mot_de_passe,rank) 
        VALUES ($1,$2,$3,$4)`,
    [nom,prenom,mot_de_passe,rank],
    (error, results) => {
        if (error) throw error;
        res.status(200).send(`User bien ajouté`);
    }
    )  
}




const modifUser = async(req,res) => {
    const { prenom,nom,mot_de_passe } = req.body
    pool.query('SELECT * FROM utilisateurs WHERE nom=$1 AND prenom=$2 AND mot_de_passe!=$3', [nom, prenom, mot_de_passe], (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
  
    if (result.rows.length > 0) {
      // Si le nom et prénom sont similaire mais le mot de passe est différent, enregistrer la modification
      const timestamp = new Date().toISOString();
      const logs = {
        timestamp,
        action: "Modification du mot de passe de l'utilisateur",
        details: {
          nom,
          prenom,
          ancienmot_de_passe: result.rows[0].mot_de_passe,
          nouveaumot_de_passe: mot_de_passe
        }
      };
      const jsonLogs = JSON.stringify(logs);
      const filename = `logs_modif.json`;
      const logsPath = path.join(__dirname, 'logs', filename);
  
      if (!fs.existsSync(path.join(__dirname, 'logs'))) {
        fs.mkdirSync(path.join(__dirname, 'logs'));
      }
  
      fs.appendFile(logsPath, jsonLogs + "\n", (err) => {
        if (err) throw err;
        console.log('Les logs ont été enregistrés dans le fichier ' + filename);
      });
    }
  });
  
  pool.query('SELECT * FROM utilisateurs WHERE nom=$1 AND mot_de_passe=$2 AND prenom!=$3', [nom, mot_de_passe, prenom], (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
  
    if (result.rows.length > 0) {
      // Si le nom et mot de passe sont similaire mais le prénom est différent, enregistrer la modification
      const timestamp = new Date().toISOString();
      const logs = {
        timestamp,
        action: "Modification du prénom de l'utilisateur",
        details: {
          nom,
          ancienPrenom: result.rows[0].prenom,
          nouveauPrenom: prenom,
          mot_de_passe
        }
      };
      const jsonLogs = JSON.stringify(logs);
      const filename = `logs_modif.json`;
      const logsPath = path.join(__dirname, 'logs', filename);
  
      if (!fs.existsSync(path.join(__dirname, 'logs'))) {
        fs.mkdirSync(path.join(__dirname, 'logs'));
      }
  
        fs.appendFile(logsPath, jsonLogs + "\n", (err) => {
        if (err) throw err;
        console.log('Les logs ont été enregistrés dans le fichier ' + filename);
        });
    }
    });
    
    pool.query('SELECT * FROM utilisateurs WHERE prenom=$1 AND mot_de_passe=$2 AND nom!=$3', [prenom, mot_de_passe, nom], (err, result) => {
        if (err) {
        console.error(err);
        return;
        }
        
        if (result.rows.length > 0) {
        // Si le prénom et mot de passe sont similaire mais le nom est différent, enregistrer la modification
        const timestamp = new Date().toISOString();
        const logs = {
            timestamp,
            action: "Modification du nom de l'utilisateur",
        details: {
            ancienNom: result.rows[0].nom,
            nouveauNom: nom,
            prenom,
            mot_de_passe
        }
        };
        const jsonLogs = JSON.stringify(logs);
        const filename = logs_modif.json;
        const logsPath = path.join(__dirname, 'logs', filename);

        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
        fs.mkdirSync(path.join(__dirname, 'logs'));
        }

        fs.appendFile(logsPath, jsonLogs + "\n", (err) => {
        if (err) throw err;
        console.log('Les logs ont été enregistrés dans le fichier ' + filename);
        });
    }
    
    
    });
    res.status(200).send(`User bien modifié`);
}

    


module.exports = {
    getUsers,postUser,bestPostUser,modifUser
}
