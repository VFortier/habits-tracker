const express = require('express'),
      app     = express(),
      port    = process.env.PORT || 5000;
const routes  = require('./api/routes/user.routes.js'); //importing route

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

routes(app); //register the route

app.listen(port);
console.log('RESTful API server started on: ' + port);