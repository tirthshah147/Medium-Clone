const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const tagSchema = mongoose.Schema({
  name :{
    type:String,
    required:true,
  },
  image:{
    type:String,
    required:true
  }
},{timestamps:true});

const Tag = mongoose.model('Tag',tagSchema);

function validateTag(tag){
  const schema = Joi.object({
    name:Joi.string().required(),
    image:Joi.string().required()

  })

  return schema.validate(tag);
}

module.exports.Tag = Tag;
module.exports.validate = validateTag;

