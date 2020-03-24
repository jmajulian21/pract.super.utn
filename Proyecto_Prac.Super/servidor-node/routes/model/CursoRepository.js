var ds = require("./config/config");

function findBy(params) {
    return new Promise(function (resolve, reject) {
        ds.connection.getConnection(
            function (err, connection) {
                var sql = 'SELECT * ' +
                          'FROM CARRERA ' + 
                          'INNER JOIN ASIGNACION ON ASIGNACION.ID_CARRERA = CARRERA.ID_CARRERA '+
                          'INNER JOIN CURSOS ON ASIGNACION.ID_CURSO = CURSOS.ID_CURSO '+
                          'WHERE CARRERA.ID_CARRERA = '+ params.id;

                connection.query(sql, function (err, rows, fields) {
                    try {
                        connection.release();
                        resolve(rows);
                    } catch (e) {
                        reject("NOOK");
                    }
                });

            });
    });
}

module.exports = { findBy };