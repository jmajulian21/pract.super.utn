var express = require('express');
var bodyParser = require("body-parser");
var router = express.Router();
var seq = require("./utils/Secuencia");
var legajo = require("./utils/Legajo");
var personaRepo = require("../model/PersonaRepository");
var alumnoRepo = require("../model/AlumnoRepository");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/alumnos/legajo', function (req, res) {
  legajo.alumno().then(function (legajo_alumno){
    res.json({legajo:legajo_alumno});
  })
});

router.post('/alumnos', function (req, res) {
  seq.persona().then(function (idPeson) {

    var persona = req.body.datoAlumno;
    var alumno = persona.detalle;
    persona.id = idPeson;
    alumno.id_persona = idPeson;
    

    personaRepo.add(persona).then(function (resultPerson) {
      if (resultPerson === 'OK') {
        seq.alumno().then(function (idAlumno) {
          alumno.id_alumno = idAlumno;
          alumnoRepo.add(alumno).then(function (resultAlumno) {
            if (resultAlumno === 'OK') { res.send('OK');}
          })
        })
      }
    })
  });
});

module.exports = router;