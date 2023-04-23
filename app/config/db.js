
// details below for the database connection paramenters.

const mysql = require("mysql");
const conn = mysql.createConnection({

    // host: 'localhost',
    // user: 'sqluser',
    // password: 'password',
    // database: 'demo'

    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

conn.connect();
console.log("DB Connected");

module.exports =conn;






// let configdb = {
//     host: 'localhost',
//     user: 'sqluser',
//     password: 'password',
//     database: 'demo'

// };

// module.exports = configdb;