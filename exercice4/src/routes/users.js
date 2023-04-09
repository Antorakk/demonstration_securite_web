const { Router } = require('express');
const router = Router();
const express = require('express');
const createUser = require('../controllers/createUser');
const loginUser = require('../controllers/loginUser');
const required = require('express-required-fields')
const mongoSanitize = require('express-mongo-sanitize');


router.use(mongoSanitize())
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.post('/create-user',required(['mail','password']),createUser);
router.post('/login-user',loginUser)

module.exports = router;