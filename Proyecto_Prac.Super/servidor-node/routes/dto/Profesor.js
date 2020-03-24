var express = require('express');
var bodyParser = require("body-parser");
var router = express.Router();
var seq = require("./utils/Secuencia");
var legajo = require("./utils/Legajo");
var personaRepo = require("../model/PersonaRepository");
var profesorRepo = require("../model/ProfesorRepository");
var usuarioRepo = require("../model/UsuarioRepository");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/profesor/legajo', function (req, res) {
  legajo.profesor().then(function (legajo_profesor) {
    res.json({ legajo: legajo_profesor });
  })
});

router.post('/profesor', function (req, res) {
  var usuario = {};
  seq.persona().then(function (idPeson) {

    var persona = req.body.datoProfesor;
    var profesor = persona.detalle;
    persona.id = idPeson;
    profesor.id_persona = idPeson;

    usuario.id_persona = idPeson;
    usuario.tipo_usuario = 'Profesor';
    usuario.user = profesor.legajo;
    usuario.pass = persona.nroDoc;

    personaRepo.add(persona).then(function (resultPerson) {
      if (resultPerson === 'OK') {
        seq.profesor().then(function (idProfesor) {
          profesor.id_alumno = idProfesor;
          profesorRepo.add(profesor).then(function (resultProfesor) {
            if (resultProfesor === 'OK') {
              seq.usuario().then(function (id_usuario) {
                usuario.id_usuario = id_usuario;
                usuarioRepo.add(usuario).then(function (resultUsuario) {
                  if (resultUsuario === 'OK') {
                    res.send( {status : 'OK'} );
                  }
                })
              })
            }
          })
        })
      }
    })
  });
});

module.exports = router;