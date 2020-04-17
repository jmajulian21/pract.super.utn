var ds = require("./config/config");

function findBy(params) {
    return new Promise(function (resolve, reject) {
        ds.connection.getConnection(
            function (err, connection) {
                var sql = 'SELECT tipo_persona.descripcion as tipoPersona,persona.apellido, persona.nombre, ' +
                          '       tipo_documentacion.descripcion as tipoDocumento, persona.nroDoc as nroDocumento, persona.email '+
                          'FROM persona ' + 
                          'INNER JOIN tipo_persona ON persona.id_tipo_persona = tipo_persona.id_tipo '+
                          'INNER JOIN tipo_documentacion ON persona.tipoDoc = tipo_documentacion.tipo_documento '+
                          'LEFT JOIN alumno ON persona.id_persona = alumno.id_persona '+
                          'LEFT JOIN profesor ON persona.id_persona = profesor.id_persona '+
                          'LEFT JOIN secretaria ON persona.id_persona = secretaria.id_persona '+
                          'WHERE 1=1 ';
                
                if (params.idTipoPersona) {
                    sql += ' AND tipo_persona.id_tipo = '+params.idTipoPersona;
                }

                if (params.tipoDocumento && params.nroDocumento) {
                    var nroDocumento = '\''+params.nroDocumento+'\'';
                    sql += ' AND (tipo_persona.id_tipo = '+params.tipoDocumento+' AND persona.nroDoc like '+nroDocumento+')';
                }

                if (params.legajo) {
                    var legajo = '\''+params.legajo+'\'';
                    sql += ' AND persona.legajo = '+legajo;
                }

                sql += ' ORDER BY persona.apellido';

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