const { Router } = require('express');
const router = Router();
const express = require('express');
const createUser = require('../controllers/createUser');
const { verificationIdentity , verificationOtp } = require('../controllers/verificationIdentity');
const { transporter } = require('../models/transporter');
const { findOne } = require('../services/db/crud');

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.post('/send-mail',verificationIdentity);
router.post('/verify',verificationOtp);

router.post('/create-user',createUser);


module.exports = router;