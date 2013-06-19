var mysql = require('mysql');

module.exports = {
  connection: mysql.createConnection({
  database     : 'bizbase',
  user     : 'root',
  password : '~pass',
  host: '127.0.0.1'
  })
};
