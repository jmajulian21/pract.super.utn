var ds = require("./config/config");

function findAll() {
    return new Promise(function (resolve, reject) {
        ds.connection.getConnection(
            function (err, connection) {
                var sql = 'SELECT * FROM MATERIA';
                                                            
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

function findBy(params) {
    return new Promise(function (resolve, reject) {
        ds.connection.getConnection(
            function (err, connection) {
                var sql = ' SELECT MATERIA.* ' +
                          ' FROM CARRERA ' + 
                          ' INNER JOIN ASIGNACION ON ASIGNACION.ID_CARRERA = CARRERA.ID_CARRERA '+
                          ' INNER JOIN CURSOS ON ASIGNACION.ID_CURSO = CURSOS.ID_CURSO '+
                          ' INNER JOIN MATERIA ON ASIGNACION.ID_MATERIA = MATERIA.ID_MATERIA '+
                          ' WHERE CARRERA.ID_CARRERA = '+ params.id_carrera + 
                          ' AND CURSOS.ID_CURSO    = '+ params.id_curso ;

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

module.exports = { findAll, findBy};