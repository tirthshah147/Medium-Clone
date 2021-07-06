const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const {signup, activateAccount, logIn} = require('../controllers/auth');


router.post('/signup',signup);
router.post('/activate',activateAccount);
router.post('/login',logIn);


module.exports = router;

