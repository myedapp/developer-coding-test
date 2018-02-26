const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const routes = require('./routes/routes');

const app = express();
const port = 3100;

// View Engine
app.set('views', path.join(__dirname, 'views')); // Point views at views folder
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Looks for static files in the client folder
app.use(express.static(path.join(__dirname, 'client')));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Access-Control-Allow-Origin Development Memes
app.use(function(request, response, next) {
  response.header('Access-Control-Allow-Origin', "http://localhost:8080");
  response.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  response.header('Access-Control-Allow-Headers', 'Content-Type'); next();
});

// Set Routes
app.use('/', index); // Point '/' at the index.js file in 'routes'
app.use('/api', routes); // Point '/api' at the products.js file in 'routes'

app.listen(port, function() {
  console.log('Server Running on Port: ' + port);
});
