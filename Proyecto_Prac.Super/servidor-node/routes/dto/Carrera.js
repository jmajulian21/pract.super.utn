var express = require('express');
var router = express.Router();
var carreraRepo = require("../model/CarreraRepository");
var cursoRepo = require("../model/CursoRepository");
var materiaRepo = require("../model/MateriaRepository");
var programaRepo = require("../model/ProgramaRepository");
var fechaClasesRepo = require("../model/FechaClasesRepository");

router.get('/carreras', function (req, res) {
  var carrera = {};
  carreraRepo.findAll(carrera).then(function (data) {
      { res.json(data);}
  });
});

router.get('/carreras/:id/cursos', function (req, res) {
  cursoRepo.findBy(req.params).then(function (data) {
    { res.json(data);}
  })
});

router.get('/carreras/:id1/cursos/:id2/materias', function (req, res) {
  var params = {};
  params.id_carrera = req.params.id1;
  params.id_curso = req.params.id2;
  materiaRepo.findBy(params).then(function (data) {
    { res.json(data);}
  })
});


router.get('/carreras/:id/cursos/:id2/materias/:id3', function (req, res) {
    var params = {};
    params.id_carrera = req.params.id;
    params.id_curso = req.params.id2;
    params.id_materia = req.params.id3;

    fechaClasesRepo.findBy(params).then(function (fechasClases) {
        programaRepo.findBy(params).then(function (programa){
          console.log(programa);
          var fecha_inicio = new Date(fechasClases.fecha_inicio) ;
          var fechas = [];

          for(i=0; i<14;i++){
              var fechaInicio = new Date(fecha_inicio);
              fechaInicio.setDate(fecha_inicio.getDate() + (programa.id_dia_clase_1 - 1) + (7*i));
              var item = {key:i+1,fecha:fechaAR.toLocaleDateString()}
              fechas.push(item);
          }

          let clases = fechas.filter(item => item <= new Date() );
          clases.sort(function (a, b) {
            return b - a;
          });

          
          res.json(clases);
        });
    });
  });


/*
router.post('/carreras/:id/cursos/:id2/materias/:id3/inscripcion', function (req, res) {
  var asignacion = data.asignaciones.find(item => item.id_carrera == req.params.id && item.id_curso == req.params.id2 && item.id_materia == req.params.id3);
  
  var itemI = { id: (data.alumnos_inscriptos.length + 1) };
  data.alumnos_inscriptos.push({id_alumnos_inscriptos:itemI.id, id_asignacion:asignacion.id_asignacion,id_alumno: req.body.id_alumno });
  res.json({status: 'OK'});
});
  var fechas = [];
  var alumnos = [];
  var materia = data.materias.find(item => item.id_materia == req.params.id3);
  var asignacion = data.asignaciones.find(item => item.id_carrera = req.params.id & item.id_curso == req.params.id2 && item.id_materia == req.params.id3);
  var programa = data.programas.find(item => item.id_asignacion == asignacion.id_asignacion);
  var fecha_clases = data.fechas_clases.find(item => item.id_carrera == asignacion.id_carrera);

  var fecha_inicio = new Date(fecha_clases.fecha_inicio);
  fecha_inicio.setDate(fecha_inicio.getDate() + programa.id_dia_clase_1 - 1);

  for(i=0;i<15;i++){
    var fechaAR = new Date(fecha_inicio);
    fechaAR.setDate(fechaAR.getDate() + (7 *i));
    var item = {key:i+1,fecha:fechaAR.toLocaleDateString()}
    fechas.push(item);
  }

  for (var i = 0; i < data.alumnos_inscriptos.length; i++){
    if (data.alumnos_inscriptos[i].id_asignacion == programa.id_asignacion){
      var alumno = data.alumnos.find(item => item.id_alumno == data.alumnos_inscriptos[i].id_alumno);
      var persona = data.personas.find(item => item.id_persona == alumno.id_persona);
      persona.detalle = alumno;
      alumnos.push(persona);
    }
  }
  materia.fechas = fechas;
  materia.alumnos = alumnos;
  
  res.json(materia);
*/


module.exports = router;
