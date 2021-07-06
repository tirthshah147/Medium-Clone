const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const {User,validate}  = require('../models/users');
require('dotenv/config');

const mailgun = require("mailgun-js");
const DOMAIN = 'sandboxecb66128574c45d58dcd58da19c9ef5f.mailgun.org';
const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN});

exports.signup = async(req,res) => {
  console.log(req.body);
  const {error} = validate(req.body);
  if(error) return res.status(400).send({message : error.details[0].message});

  let user = await User.findOne({email : req.body.email});
  if (user) return res.status(400).send({message : "User is already registered!"});

  let {name,email,password} = req.body;

  passwordSalt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password,passwordSalt);


  const token = jwt.sign({name,email,password},process.env.JWT_SECRET_KEY, {expiresIn:'30m'});

  const data = {
    from: 'tirthshah147@gmail.com',
    to: req.body.email,
    subject: 'Your email is hacked!',
    html: `
    Click the link below to sign in to your Medium account.<br/>
    This link will expire in 30 mins and can only be used once.<br/>
    <a href="${process.env.CLIENT_URL}/activate/${token}"><button>Activate Email Now</button></a><br/>
    If the button above doesn’t work, paste this link into your web
    <a href="${process.env.CLIENT_URL}/activate/${token}">${process.env.CLIENT_URL}/activate/${token}</a>
    `
  };

  mg.messages().send(data, function (error, body) {
    console.log(body);
  });

  res.send({message: "Activation link is sent to your mail. Activate your account now!"});

  // const {name,email,password} = req.body;
  // user = new User({name,email,password});

  // user = new User(_.pick(req.body,['name','email','password']));
  // const salt = await bcrypt.genSalt(10);
  // user.password = await bcrypt.hash(user.password, salt);
  // user = await user.save();

  // res.send(_.pick(user,['name','email','password']));
  // console.log(user);

}

exports.activateAccount = async(req,res) => {
  console.log(req.body);
  const {token} = req.body;
  if(token){
    try{

      const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
      console.log(payload);
      const {name,email,password} = payload;
      let user = await User.findOne({email});
      if(user) return res.status(400).send({message: "User is already registered!"});
      user = new User({name,email,password});
      user = await user.save();
      res.send({message : "SignUp Successfully"})


    }catch(error){
      return res.status(400).send({message: 'Invalid token!'});
    }
  }
}

exports.logIn = async(req,res) => {
  console.log(req.body);
  const {email,password} = req.body;
  let user = await User.findOne({email});
  if(!user) return res.status(400).send({message : 'Invalid Email/Password.'});
  if(bcrypt.compare(password, user.password)){
    return res.send({message:"LogIn Successfully", data: user.generateAuthToken()});
  }
  return res.status(400).send({message : 'Invalid Email/Password.'});
}






