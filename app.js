const express = require('express');
const bodyParser = require('body-parser');
const es6 = require('express-es6-template-engine');
const todoListData = require('./todoListData');
const port = 3000

// App Setup
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }))

// Template Engine Configuration
app.engine('html' , es6)
app.set('views' ,'views')
app.set('view engine', 'html')


// GET /todos

app.get('/todos', (req, res) => {
  res.render('todo',{
    locals:{
      todos: todoListData
    }
  } )
});

// GET /todos/:id

// POST /todos
app.post('/todos', (req, res) => {
  if (!req.body.newtodo) {
    res.status(418).send('Please fill out form')
  }

  todoListData.push({
    id: todoListData.length + 1,
    content: req.body.newtodo
  })
  console.log(todoListData);
  res.redirect('/todos')
});
// PUT /todos/:id

// DELETE /todos/:id

app.listen(port, function () {
  console.log('Todo List App is now listening on port 3000...');
});
