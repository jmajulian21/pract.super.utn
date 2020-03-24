var express = require('express');
var router = express.Router();
var data = require('../data/data');

//Metodo del Express
router.get('/cursos/:id', function (req, res) {
  var id = req.params.id;
  var resp = data.carreras.find((item) => item.id_carrera == id);

  res.json(resp);
});

router.get('/cursos', function (req, res) {
  res.json(data.cursos);
});

router.get('/cursos/:id/materias', function (req, res) {
  var id = req.params.id;
  var resp = [];
  for (var i = 0; i < data.asignaciones.length; i++) {
    if (data.asignaciones[i].id_curso == id) {
      for (var j = 0; j < data.materias.length; j++) {
        if (data.materias[j].id_materia == data.asignaciones[i].id_materia) {
          resp.push(data.materias[j]);
        }
      }
    }
  }
  res.json(resp);
});