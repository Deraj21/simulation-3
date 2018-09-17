const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');
const session = require('express-session');

const { PORT, CONNECTION_STRING, SECRET } = process.env;
  
  const app = express();
  app.use(bodyParser.json());
  app.use( session({
    secret: SECRET,
    cookie: {
      user_id: null,
      username: ''
    },
    resave: false,
    saveUninitialized: true,
    expires: 2592000000
  }) );

massive(CONNECTION_STRING)
  .then( db => {
    app.set('db', db);
    console.log('Connected to database');
  } )
  .catch( err => {
    console.log(`dbErr: ${err.message}`);
  } );

// auth
app.post('/api/auth/register', controller.createUser);
app.post('/api/auth/login', controller.loginUser);
app.post('/api/auth/logout', controller.logoutUser);

// posts
app.get('/api/post/:id', controller.getPost);
app.get('/api/posts', controller.getPosts);
app.post('/api/post', controller.createPost);
app.put('/api/post/:id', controller.editPost);
app.delete('/api/post/:id', controller.deletePost);

const port = PORT || 4000;
app.listen(port, console.log(`Server listening on port ${port}`));