const express = require('express'),
  app = express(),
  port = process.env.PORT || 5000;

const bodyParser = require("body-parser");

var routes = require('./api/routes/user.routes.js'); //importing route

routes(app); //register the route

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port);
console.log('RESTful API server started on: ' + port);