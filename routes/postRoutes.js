const express = require("express");
const postControllers = require("../controllers/postControllers");
const router = express.Router();
// We define the routes here , to where the client will make a request

// GET and POST requests to /posts/
// use chaining ,this is the path "/posts" that will accept GET and POST,remember we defined "app.use("/posts",postRoutes);"" in server.js so there is always /posts in the path for this postRoutes for a blog post
router
  .route("/")
  .get(postControllers.getAllPosts)
  .post(postControllers.createNewPost);

  // This route takes in a url parameter ,eg: /posts/1
router.route("/:id").get(postControllers.getPostById);

module.exports = router;
