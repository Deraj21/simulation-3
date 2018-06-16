const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const { PORT, CONNECTION_STRING, secret } = process.env;

const app = express();
app.use(bodyParser.json());
massive(CONNECTION_STRING)
  .then( db => {
    app.set('db', db);
    console.log('Connected to database');
  } )
  .catch( err => {
    console.log(`dbErr: ${err.message}`);
  } );

// endpoints

const port = PORT || 4000;
app.listen(port, console.log(`Server listening on port ${port}`));