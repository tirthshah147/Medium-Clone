const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const {createBlog, addTag, getAllBlogs} = require('../controllers/blogs');


router.post('/createBlog',createBlog);
router.post('/addTag',addTag);
router.get('/getAllBlogs',getAllBlogs);


module.exports = router;

