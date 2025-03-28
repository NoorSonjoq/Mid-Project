const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1425",
    database: "profile2"
});

db.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
        process.exit(1);
    } else {
        console.log('MySQL connected');
    }
});

module.exports = db;
