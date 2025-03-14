//import posts from post.js
const posts = require('../data/posts');

//index
function index(req, res) {

  //get query tag inserted
  const queryTag = req.query.tag;
  let filteredPost = posts;

  //check if tag exist
  if (!queryTag) {

    //return all posts
    return res.json(filteredPosts);
  }

  //else filter posts
  filteredPosts = posts.filter(post => post.tags.includes(queryTag));

  //return result
  res.json(filteredPosts);

}

//show
function show(req, res) {
  const postSlug = req.params.slug;

  const post = posts.find(post => post.slug === postSlug);

  if (!post) {
    return res.status(404).json({
      error: "404 Not Found",
      message: "Post not found"
    });
  }

  res.json(post);
}

//store
function store(req, res) {
  res.send("Add a new post");
}

//update
function update(req, res) {
  res.send("Full update post");
}

//modify
function modify(req, res) {
  res.send("Partial update post");
}

//destroy
function destroy(req, res) {

  //get dynamic slug
  const postSlug = req.params.slug;
  //try to find post with given slug
  const post = posts.find(post => post.slug === postSlug);

  //if post not found
  if (!post) {
    //error
    return res.status(404).json({
      error: "404 Not Found",
      message: "Post Not Found"
    });
  }

  //else remove the post
  posts.splice(posts.indexOf(post), 1);
  //print length in console to check the result
  console.log(posts);

  //send 204 status
  res.sendStatus(204);
}

module.exports = {
  index, show, store, update, modify, destroy
};