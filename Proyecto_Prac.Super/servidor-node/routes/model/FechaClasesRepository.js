var ds = require("./config/config");

function findBy(params) {
    var id_carrera = params.id_carrera;
    return new Promise(function (resolve, reject) {
        ds.connection.getConnection(
            function (err, connection) {
                var query = ' SELECT MAX(ID_FECHA_CLASE),fecha_inicio,fecha_fin '+
                                    ' FROM FECHA_CLASE '+
                                    ' WHERE ID_CARRERA = '+ id_carrera + ';';

                connection.query(query, function (err, rows, fields) {
                    try {
                        if (err) throw err; 
                        connection.release();
                        resolve(rows[0]);
                    } catch (e) {
                        reject("NOOK");
                    }
                });

            });
    });
}

module.exports = { findBy };