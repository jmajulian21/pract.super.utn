var express = require('express');
var router = express.Router();
var consultaRepo = require("../model/ConsultaRepository");


router.post('/consultas', function (req, res) {
  var params = req.body;
  console.log(params);
  
  consultaRepo.findBy(params).then(function (data) {
      { res.json(data);}
  });
});

module.exports = router;