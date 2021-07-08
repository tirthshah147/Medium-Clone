const mongoose = require('mongoose');
const Joi = require('joi');
const {User} = require('./users');
const {Tag} = require('./tags');
Joi.objectId = require('joi-objectid')(Joi);

const blogSchema = mongoose.Schema({
  title :{
    type:String,
    required:true,
    minlength:10
  },
  content:{
    type:String,
    required:true,
    minlength:50
  },
  coverImg:{
    type:String
  },
  views:{
    type:Number,
    default:0
  },
  claps:{
    type:Number,
    default:0
  },
  author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  tags:[{type:mongoose.Schema.Types.ObjectId, ref:"Tag"}]
},{timestamps:true});

const Blog = mongoose.model('Blog',blogSchema);

function validateBlog(blog){
  const schema = Joi.object({
    title:Joi.string().min(10).required(),
    content:Joi.string().min(50).required(),
    coverImg : Joi.string(),
    author:Joi.objectId(),
    tags:Joi.array().items(Joi.objectId())
  })

  return schema.validate(blog);
}

module.exports.Blog = Blog;
module.exports.validate = validateBlog;

