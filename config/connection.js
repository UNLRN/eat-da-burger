const mysql = require('mysql2');

if (process.env.CLEARDB_DATABASE_URL) {
  let connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL)
} else {
  let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'burgers_db'
  });
}

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;