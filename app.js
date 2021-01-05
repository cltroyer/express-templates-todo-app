const express = require('express');
const bodyParser = require('body-parser');
const todoListData = require('./todoListData');

// App Setup
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./public'));

// Template Engine Configuration



// GET /todos

// GET /todos/:id

// POST /todos

// PUT /todos/:id

// DELETE /todos/:id

app.listen(3000, function () {
  console.log('Todo List App is now listening on port 3000...');
});
