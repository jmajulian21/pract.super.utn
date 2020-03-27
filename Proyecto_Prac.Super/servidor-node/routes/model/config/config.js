var mysql = require('mysql');

var connection = mysql.createPool({
    host: 'remotemysql.com',
    port     :  3306,
    user: 'kfLR4Hw1f7',
    password: 'EK6uocRpOd',
    database: 'kfLR4Hw1f7'
});

module.exports={connection}