const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const {createBlog, addTag, getAllBlogs, getUserBlogs} = require('../controllers/blogs');


router.post('/createBlog',createBlog);
router.post('/addTag',addTag);
router.get('/getAllBlogs',getAllBlogs);
router.post('/getUserBlogs',getUserBlogs);


module.exports = router;

