const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const {addTag,getPersonalizedBlogs,alterReadingList,alterFollowing,getReadingList} = require('../controllers/user');

router.post('/addTag',addTag);
router.post('/getPersonalizedBlogs',getPersonalizedBlogs);
router.post('/alterFollowing',alterFollowing);
router.post('/alterReadingList',alterReadingList);
router.post('/getReadingList',getReadingList);

module.exports = router;