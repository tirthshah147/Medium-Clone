const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const {createTag, getAllTags} = require('../controllers/tags');


router.post('/createTag',createTag);
router.get('/getAllTags',getAllTags);


module.exports = router;

