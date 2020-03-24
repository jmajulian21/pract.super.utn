var ds = require("./config/config");

function findBy(params) {
    return new Promise(function (resolve, reject) {
        ds.connection.getConnection(
            function (err, connection) {
                var sql = ' SELECT USUARIO.ID_PERSONA, '+
                          '        PERSONA.NOMBRE, '+
                          '        PERSONA.APELLIDO, '+
                          '        USUARIO.TIPO_USUARIO '+
                          ' FROM USUARIO '+
                          ' INNER JOIN PERSONA ON PERSONA.ID_PERSONA = USUARIO.ID_PERSONA '+
                          ' WHERE USUARIO.USUARIO LIKE \''+ params.user +'\''+
                          ' AND USUARIO.CONTRASEÑA LIKE \''+params.pass+'\'';

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

function add(usuario) {
    var id_usuario = '\''+usuario.id_usuario+'\'';
    var user = usuario.user ? '\''+usuario.user+'\'': null ;
    var pass = usuario.pass ? '\''+usuario.pass+'\'': null;
    var id_persona = usuario.id_persona ? '\''+usuario.id_persona+'\'': null ;
    var tipo_usuario = usuario.tipo_usuario ? '\''+usuario.tipo_usuario+'\'': null;


    return new Promise(function (resolve, reject) {
        ds.connection.getConnection(
            function (err, connection) {
                var sql = 'INSERT INTO USUARIO VALUES ('+id_usuario+','+
                                                         user+','+
                                                         pass+','+
                                                         id_persona+','+
                                                         tipo_usuario+')';
                                                                      
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

module.exports = { add,findBy };