var ds = require("./config/config");

function get(asignacion) {
    var id_carrera = asignacion.id_carrera ? asignacion.id_carrera :null ;
    var carrera = asignacion.carrera ? '\''+asignacion.carrera+'%\'': null ;


    return new Promise(function (resolve, reject) {
        ds.connection.getConnection(
            function (err, connection) {
                var sql = 'SELECT * FROM CARRERA WHERE 1=1 ';
                                                                      
                if(id_carrera){
                  sql += 'AND ID_CARRERA = '+ id_carrera +' ';}

                if(carrera){
                  sql += 'AND CARRERA LIKE '+ carrera;}
                
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

module.exports = { get };