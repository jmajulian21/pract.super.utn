var express = require('express');
var router = express.Router();
var usuarioRepo = require("./model/UsuarioRepository");


router.post('/login', function (req, res, next) {
  var params = {};
  params.user = req.body.usuario;
  params.pass = req.body.contraseña;
  
  usuarioRepo.findBy(params).then(function (data) {
    console.log(data);
    res.json(data);
  });
});

module.exports = router;
