const {Blog,validate}  = require('../models/blogs');

exports.createBlog = async(req,res) => {
  console.log(req.body);
  const {error} = validate(req.body);
  if(error) return res.status(400).send({message : error.details[0].message});

  const {title,content,author,tags,coverImg} = req.body;
  try{
    blog = new Blog({title,content,author,tags,coverImg});
    blog = await blog.save();
    res.send({message : "Blog saved succesfully", data : blog});
  }catch(error){
    return res.status(400).send({message : "Error while saving the blog"})
}

}

exports.addTag = async(req,res) => {
  console.log(req.body);
  const {blogId, tagId} = req.body;
  let blog = await Blog.findById(blogId);
  blog.tags.push(tagId);
  blog = await blog.save();
  res.send({message : "Tag is added to particular Blog.", data:blog})
}

exports.getAllBlogs = async(req,res) => {
  let blogs = await Blog.find()
                        .populate('author','name _id')
                        .populate('tags','name')
                        .sort({views:-1})
  console.log(blogs);
  return res.send({message:"Blogs fetched succesfully", data : blogs});
}

exports.getUserBlogs = async(req,res) =>{
  console.log(req.body);
  const {userId} = req.body;
  let blogs = await Blog
                    .find({author: userId})
                    .populate('author','name _id')
                    .populate('tags','name')
                    .sort({updatedAt:-1});
                    
  res.send({message:"All blogs are here!", data:blogs})
}

