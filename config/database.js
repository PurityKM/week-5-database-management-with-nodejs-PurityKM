const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Purity1210##',
    database: 'expensetracker' // Update with your database name
});

con.connect(err => {
    if (err) throw err;
    console.log('Connected to the database!');
});

module.exports = con;