//import express library
const express = require('express');
//create an instance of express
const app = express();
//create server port
const port = 3000;

//import posts router
const postsRouter = require('./routers/postsRouter');

//start server listening
app.listen(port, () => {
  console.log(`🟢 Server start running on port http://localhost:${port}`);
});

//home route
app.get('/', (req, res) => {
  res.send("Welcome to our Blog Server!");
});

//static assets
app.use(express.static('public'));

//posts middleware
app.use('/posts', postsRouter);