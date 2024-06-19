// Create a web server
const express = require('express');
const app = express();

// Import the comments data
const comments = require('./data/comments');

// Get the comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get a single comment
app.get('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  res.json(comment);
});

// Listen for incoming requests
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});