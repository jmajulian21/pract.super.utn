var ds = require("./config/config");

function findBy(params) {
    var id_carrera = params.id_carrera;
    var id_curso = params.id_curso;
    var id_materia = params.id_materia;
    
    return new Promise(function (resolve, reject) {
        ds.connection.getConnection(
            function (err, connection) {
            var queryPrograma = ' SELECT PROGRAMA.* ' +
                                ' FROM CARRERA ' +
                                ' INNER JOIN ASIGNACION ON ASIGNACION.ID_CARRERA = CARRERA.ID_CARRERA ' +
                                ' INNER JOIN CURSOS ON ASIGNACION.ID_CURSO = CURSOS.ID_CURSO ' +
                                ' INNER JOIN MATERIA ON ASIGNACION.ID_MATERIA = MATERIA.ID_MATERIA ' +
                                ' INNER JOIN PROGRAMA ON PROGRAMA.ID_ASIGNACION = ASIGNACION.ID_ASIGNACION ' +
                                ' WHERE CARRERA.ID_CARRERA = ' + id_carrera +
                                ' AND CURSOS.ID_CURSO   = ' + id_curso +
                                ' AND MATERIA.ID_MATERIA = ' + id_materia + ';';

                connection.query(queryPrograma, function (err, rows, fields) {
                    try {
                        connection.release();
                        resolve(rows[0]);
                    } catch (e) {
                        reject("NOOK");
                    }
                });

            });
    });
}

module.exports = {findBy};