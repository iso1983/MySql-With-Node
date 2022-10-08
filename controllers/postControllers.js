// This is a controller for blog post,we define middlewares here
const Post = require("../models/Post");

exports.getAllPosts = async (req, res, next) => {
  try {
     // we only want to get the first array from sql response so we use destructuring,the second array has _buf from mysql that we don't want
    const [posts,_] = await Post.findAll();
    res.status(200).json({count:posts.length, posts });
  } catch (e) {
    console.log(e);
    // this calls global error handler in server,js
    next(e);
  }
};

exports.createNewPost = async (req, res, next) => {
  try {
    // do not get data from client like this without input filtering in real life, i just do this for demo purposes,be careful of XSS and SQLI
    let { title, body } = req.body;
    let post = new Post(title, body);
    post = await post.save();
    res.status(201).json({ message: "Post created" });
  } catch (e) {
    console.log(e);
    // this calls global error handler in server,js
    next(e);
  }
};

exports.getPostById = async (req, res, next) => {
  try{
    // we only want to get the first array from sql response so we use destructuring,the second array has _buf from mysql that we don't want
    // Do not directly inject req.params.id like below,this is very dangerous ,apply some input filtering,this is just a demo
    let [post,_]=await Post.findById(req.params.id);
    res.status(200).json({post:post[0]})
  }catch(e){
    console.log(e);
    next(e);
  }
};
