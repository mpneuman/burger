
var mysql = require('mysql');
var connection;


  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root', 
    database : 'burgers_db' 
  });


module.exports = connection;