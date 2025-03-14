//import posts from post.js
const posts = require('../data/posts');

//index
function index(req, res) {
  res.send("index");
}

//show
function show(req, res) {
  res.send("show");
}

//store
function store(req, res) {
  res.send("store");
}

//update
function update(req, res) {
  res.send("update");
}

//modify
function modify(req, res) {
  res.send("modify");
}

//destroy
function destroy(req, res) {
  res.send("destroy");
}

module.exports = {
  index, show, store, update, modify, destroy
};