const jwt = require('jsonwebtoken');
const {User}  = require('../models/users');
const {Blog} = require('../models/blogs');
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
  res.send({message : "Tag is added to user tag list.", data:user})
}


exports.getPersonalizedBlogs = async(req,res) =>{
  console.log(req.body);
  const {userId} = req.body;
  let user = await User.findById(userId);
  let tags = user.tags;
  let followings = user.followings;
  let blogs = await Blog
                    .find()
                    .or([{ tags: { $elemMatch: { $in: tags } } }, {author:{$in : followings}}])
                    .populate('author','name')
                    .populate('tags','name')
                    .sort({views:-1});
  console.log(blogs);
  res.send({message:"Blogs fetched successfully", data:blogs});
}

exports.alterFollowing = async(req,res) => {
  console.log(req.body);
  const {myId, followingId} = req.body;
  let me = await User.findById(myId);
  let followingUser = await User.findById(followingId);
  let myFollowings = me.followings;
  let followingUserFollowers = followingUser.followers;

  if (myFollowings.includes(followingId)) {
    myFollowings.splice(myFollowings.indexOf(followingId),1);
    me.followings = myFollowings;
    followingUserFollowers.splice(followingUserFollowers.indexOf(myId),1);
    followingUser.followers = followingUserFollowers;
  }else{
    me.followings.push(followingId);
    followingUser.followers.push(myId);
  }
  me = await me.save();
  followingUser = await followingUser.save();
  res.send({message : "Tag is added to user tag list.", data:me})
}

exports.alterReadingList = async(req,res) => {
  console.log(req.body);
  const {userId, blogId} = req.body;
  let user = await User.findById(userId);
  let readerList = user.readerList;
  if (readerList.includes(blogId)) {
    readerList.splice(readerList.indexOf(blogId),1);
    user.readerList = readerList;
  }else{
    user.readerList.push(blogId);
  }
  user = await user.save();
  res.send({message : "Reader List is updated", data:user});
}


exports.getReadingList = async(req,res) => {
  console.log(req.body);
  const {userId} = req.body;
  let user = await User.findById(userId).populate('readerList');
  res.send({message : "Reader List is updated", data:user.readerList});
}




