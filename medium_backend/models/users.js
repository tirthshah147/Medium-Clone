const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');


const userSchema = mongoose.Schema({
  name:{
    type:String,
    required:true,
    minlength:5,
    maxlength:60
  },
  email:{
    type:String,
    required : true,
    minlength:10,
    maxlength:255,
    unique:true
  },
  password:{
    type:String,
    required:true,
    minlength:8,
    maxlength:1024
  }
}, {timestamps : true});

userSchema.methods.generateAuthToken = function(){
  const token = jwt.sign({_id : this._id}, process.env.JWT_SECRET_KEY);
  return token;
}

const User = mongoose.model('User',userSchema);


function validateUser(user){
  const schema = Joi.object({
    name : Joi.string().min(5).max(60).required(),
    email: Joi.string().min(10).max(255).email().required(),
    password: Joi.string().min(8).max(1024).required()
  })

  return schema.validate(user);
}

module.exports.User = User;
module.exports.validate = validateUser;


