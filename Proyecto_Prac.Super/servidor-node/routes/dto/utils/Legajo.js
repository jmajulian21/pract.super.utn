var ds = require("../../model/config/config");


function profesor() {
    return new Promise(function (resolve, reject) {
        ds.connection.getConnection(
            function (err, connection) {
                connection.query('select max(legajo)+1 as legajo from utn_practica.profesor', function (err, rows, fields) {
                    try {
                        if (err) throw err;
                        connection.release();
                        resolve(rows[0].legajo);
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
                connection.query('select max(legajo)+1 as legajo from utn_practica.alumno', function (err, rows, fields) {
                    try {
                        if (err) throw err;
                        connection.release();
                        resolve(rows[0].legajo);
                    } catch (e) {
                        console.log("Error: " + e)
                    }
                });

            });
    });
}
module.exports = { profesor,alumno };

