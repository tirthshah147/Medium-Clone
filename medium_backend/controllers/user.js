const jwt = require('jsonwebtoken');
const {User}  = require('../models/users');
require('dotenv/config');

exports.addTag = async(req,res) => {
  console.log(req.body);
  const {userId, tagId} = req.body;
  let user = await User.findById(userId);
  let tags = user.tags;
  if (tags.includes(tagId)) {
    tags.splice(tags.indexOf(tagId),1);
    user.tags = tags;
  }else{
    user.tags.push(tagId);
  }
  user = await user.save();
  res.send({message : "Tag is added to particular Blog.", data:user})
}



