const { Router } = require('express');
const router = Router();
const express = require('express');
const createUser = require('../controllers/createUser');
const loginUser = require('../controllers/loginUser');
const required = require('express-required-fields')
const mongoSanitize = require('express-mongo-sanitize');
const { body } = require('express-validator');


router.use(mongoSanitize())
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.post('/create-user',createUser); // required vérifie les champs (middleware)
router.post('/login-user',
    body('mail').isEmail(),
    body('password').isLength({min:5}),
    loginUser)

module.exports = router;