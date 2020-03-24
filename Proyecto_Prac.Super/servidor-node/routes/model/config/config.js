var mysql = require('mysql');

var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'GvMzppcoZPT36Kla',
    database: 'UTN_PRACTICA'
});

module.exports={connection}