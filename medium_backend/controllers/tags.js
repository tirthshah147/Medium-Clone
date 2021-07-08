const {Tag,validate}  = require('../models/tags');

exports.createTag = async(req,res) => {
  console.log(req.body);
  const {error} = validate(req.body);
  if(error) return res.status(400).send({message : error.details[0].message});

  const {name,image} = req.body;
  try{
    tag = new Tag({name,image});
    tag = await tag.save();
    res.send({message : "Tag saved succesfully", data :tag});
  }catch(error){
    return res.status(400).send({message : "Error while saving the blog"})
}

}

exports.getAllTags = async(req,res) => {
  let tags = await Tag.find();
  console.log(tags);
  return res.send({message:"Tags fetched succesfully", data : tags});
}

