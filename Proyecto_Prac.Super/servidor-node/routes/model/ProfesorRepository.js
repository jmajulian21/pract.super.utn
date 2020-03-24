var ds = require("./config/config");

  function add(profesor) {
    var id_profesor = '\''+profesor.id_profesor+'\'';
    var id_persona = profesor.id_persona ? '\''+profesor.id_persona+'\'': null ;
    var legajo = profesor.legajo ? '\''+profesor.legajo+'\'': null;
    var egresadoDe = profesor.egresadoDe ? '\''+profesor.egresadoDe+'\'': null ;
    var titulo = profesor.titulo ? '\''+profesor.titulo+'\'': null;
    var promedio = profesor.promedio ? '\''+profesor.promedio+'\'': null ;


    return new Promise(function (resolve, reject) {
        ds.connection.getConnection(
            function (err, connection) {
                var sql = 'INSERT INTO PROFESOR VALUES ('+id_profesor+','+
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