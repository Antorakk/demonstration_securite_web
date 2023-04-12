import { Router } from 'express';
import express  from 'express';
import mongoSanitize from 'express-mongo-sanitize';
import { body } from 'express-validator';
import { createUser } from '../controllers/createUser.js';
import { loginUser } from '../controllers/loginUser.js';

const router = Router();

// const createUser = require('../controllers/createUser');
// const loginUser = require('../controllers/loginUser');

// const editUser = require('../controllers/editUser');


router.use(mongoSanitize())
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.post('/create-user',createUser); // required vérifie les champs (middleware)
router.post('/login-user',
    body('mail').isEmail(),
    body('password').isLength({min:5}),
    loginUser)

// router.post('/edit-user',editUser)

export {router};