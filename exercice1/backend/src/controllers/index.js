const { Pool } = require('pg');

const pool = new Pool({
    host:'127.0.0.1',
    user:'antorak',
    password:'antorak123',
    database:'testsecuweb',
    port:'5433'
})

const getUsers = async(req,res) => {
    const response = await pool.query(`Select * from utilisateur`)
    res.status(200).json(response.rows);
}

const postUser = async(req,res) => {
    
    const { prenom,nom,telephone,mot_de_passe } = req.body
    const rank = 1

    console.log(prenom,nom,telephone,mot_de_passe)

    pool.query(`INSERT INTO utilisateur(nom,prenom,numero_tel,mot_de_passe,rank) VALUES ($1, $2, $3, $4 ,$5)`,
    [nom, prenom, telephone, mot_de_passe, rank],
    (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).send(`User bien ajouté`)
      }
    )
}


module.exports = {
    getUsers,postUser
}
