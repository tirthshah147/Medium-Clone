const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const {addTag} = require('../controllers/user');


router.post('/addTag',addTag);

module.exports = router;