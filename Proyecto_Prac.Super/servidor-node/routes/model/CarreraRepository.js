var ds = require("./config/config");

function findAll() {
    return new Promise(function (resolve, reject) {
        ds.connection.getConnection(
            function (err, connection) {
                var sql = 'SELECT * FROM CARRERA WHERE 1=1 ';
                
                connection.query(sql, function (err, rows, fields) {
                    try {
                        if (err) throw err;
                        connection.release();
                        resolve(rows);
                    } catch (e) {
                        reject("NOOK");
                    }
                });

            });
    });
}

module.exports = { findAll };