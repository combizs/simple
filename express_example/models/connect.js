var mysql = require('mysql');

module.exports = {
  connection: mysql.createConnection({
  database     : 'bizbase',
  user     : 'root',
  password : '~Silent83',
  host: '127.0.0.1'
  })
};