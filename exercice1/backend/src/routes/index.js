const { Router } = require('express');
const { getUsers, postUser } = require('../controllers');
const bodyParser = require('body-parser')

const urlencodedParser = bodyParser.urlencoded({ extended: false })

const router = Router();

router.get('/users',getUsers);
router.post('/',urlencodedParser,postUser)


module.exports = router;


