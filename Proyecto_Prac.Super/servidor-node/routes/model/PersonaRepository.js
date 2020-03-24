var ds = require("./config/config");

function add(persona) {
    var id = '\''+persona.id+'\'';
    var nombre = persona.apellido ? '\''+persona.nombre+'\'': null ;
    var apellido = persona.apellido ? '\''+persona.apellido+'\'': null;
    var tipoDoc = persona.tipoDoc ? '\''+persona.tipoDoc+'\'': null ;
    var nroDoc = persona.nroDoc ? '\''+persona.nroDoc+'\'': null;
    var fechNacimiento = persona.fechNacimiento ? '\''+persona.fechNacimiento+'\'': null ;
    var sexo = persona.sexo ? '\''+persona.sexo+'\'': null;
    var direccion = persona.direccion ? '\''+persona.direccion+'\'': null ;
    var piso = persona.piso ? '\''+persona.piso+'\'': null;
    var codPostal = persona.codPostal ? '\''+persona.codPostal+'\'': null;
    var localidad = persona.localidad ? '\''+persona.localidad+'\'': null ;
    var telefono = persona.telefono ? '\''+persona.telefono+'\'': null;
    var celular = persona.celular ? '\''+persona.celular+'\'': null ;
    var email = persona.email ? '\''+persona.email+'\'': null;


    return new Promise(function (resolve, reject) {
        ds.connection.getConnection(
            function (err, connection) {
                var sql = 'INSERT INTO PERSONA VALUES ('+id+','+
                                                                      nombre+','+
                                                                      apellido+','+
                                                                      tipoDoc+','+
                                                                      nroDoc+','+
                                                                      fechNacimiento+','+
                                                                      sexo+','+
                                                                      direccion+','+
                                                                      piso+','+
                                                                      codPostal+','+
                                                                      localidad+','+
                                                                      telefono+','+
                                                                      celular+','+
                                                                      email+')';
                                                                      
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

