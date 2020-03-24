var ds = require("./config/config");

  function add(alumno) {
    var id_alumno = '\''+alumno.id_alumno+'\'';
    var id_persona = alumno.id_persona ? '\''+alumno.id_persona+'\'': null ;
    var legajo = alumno.legajo ? '\''+alumno.legajo+'\'': null;
    var egresadoDe = alumno.egresadoDe ? '\''+alumno.egresadoDe+'\'': null ;
    var titulo = alumno.titulo ? '\''+alumno.titulo+'\'': null;
    var promedio = alumno.promedio ? '\''+alumno.promedio+'\'': null ;


    return new Promise(function (resolve, reject) {
        ds.connection.getConnection(
            function (err, connection) {
                var sql = 'INSERT INTO ALUMNO VALUES ('+id_alumno+','+
                                                                      id_persona+','+
                                                                      legajo+','+
                                                                      egresadoDe+','+
                                                                      titulo+','+
                                                                      promedio+')';
                                                                      
                connection.query(sql, function (err, rows, fields) {
                    try {
                        if (err) throw err;
                        connection.release();
                        resolve("OK");
                    } catch (e) {
                        reject("NOOK");
                    }
                });

            });
    });
}
module.exports = { add };