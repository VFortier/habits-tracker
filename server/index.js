var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

var routes = require('./api/routes/testRoute'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);



/*
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'habits-tracker',
  password: 'c9025cc0fd86ff0',
  database: 'habits_tracker',
  insecureAuth : true
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

connection.query('SELECT name, description FROM goal_type', (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db:');
  console.log(rows);
});
*/