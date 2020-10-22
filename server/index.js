// Import the library
const server = require('server');

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

// Launch the server to always answer "Hello world"
server(ctx => 'Hello world!');