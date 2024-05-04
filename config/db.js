const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'coderyasin',
  password: 'yasinpass',
  database: 'task_manager'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});


module.exports = db;
