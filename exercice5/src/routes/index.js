const { Router } = require('express');
const { getUsers, postUser, bestPostUser, modifUser } = require('../controllers');
const bodyParser = require('body-parser')

const urlencodedParser = bodyParser.urlencoded({ extended: false })

const router = Router();

router.get('/users',getUsers);
router.post('/',urlencodedParser,postUser)
router.post('/best',urlencodedParser,bestPostUser)
router.post('/modif',urlencodedParser,modifUser)




module.exports = router;


