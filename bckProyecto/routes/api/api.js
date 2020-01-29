
/// rutas -> router ->app:express

/// rutas -> router:entidad -> router:api -> app:express


var express = require('express');
var router = express.Router();

//http://localhost:3000/api/version
router.get('/version', function(req, res){
    res.status(200).json({"version":"API v1.0"});
} );//siempre empezar con pleca


module.exports = router;


/*
//Estructura de un Módilo y uso de module.exports para
//exponer la funcionalidad del módulo

var libLencaFunction = {};//JSON: Javascript Object Notation

libLencaFunction.mensaje = "Hola Mundo";
libLencaFunction.version = "v1.0";
libLencaFunction.sayHello = ()=>{
    console.log("Hello!");
}//Funcion de flecha gorda ( Standard ES6 )

module.exports = libLencaFunction;

*/