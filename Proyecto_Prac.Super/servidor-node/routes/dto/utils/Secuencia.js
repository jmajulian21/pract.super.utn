var ds = require("../../model/config/config");


function persona() {
    return new Promise(function (resolve, reject) {
        ds.connection.getConnection(
            function (err, connection) {
                connection.query('select count(*)+1 as id from persona', function (err, rows, fields) {
                    try {
                        if (err) throw err;
                        connection.release();
                        resolve(rows[0].id);
                    } catch (e) {
                        console.log("Error: " + e)
                    }
                });

            });
    });
}

function alumno() {
    return new Promise(function (resolve, reject) {
        ds.connection.getConnection(
            function (err, connection) {
                connection.query('select count(*)+1 as id from alumno', function (err, rows, fields) {
                    try {
                        if (err) throw err;
                        connection.release();
                        resolve(rows[0].id);
                    } catch (e) {
                        console.log("Error: " + e)
                    }
                });

            });
    });
}

function profesor() {
    return new Promise(function (resolve, reject) {
        ds.connection.getConnection(
            function (err, connection) {
                connection.query('select count(*)+1 as id from profesor', function (err, rows, fields) {
                    try {
                        if (err) throw err;
                        connection.release();
                        resolve(rows[0].id);
                    } catch (e) {
                        console.log("Error: " + e)
                    }
                });

            });
    });
}

function usuario() {
    return new Promise(function (resolve, reject) {
        ds.connection.getConnection(
            function (err, connection) {
                connection.query('select count(*)+1 as id from usuario', function (err, rows, fields) {
                    try {
                        if (err) throw err;
                        connection.release();
                        resolve(rows[0].id);
                    } catch (e) {
                        console.log("Error: " + e)
                    }
                });

            });
    });
}
module.exports = { persona,alumno,profesor,usuario };

