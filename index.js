//Objeto express que levanta servidor se encarga de los métodos http (request y response)
var oExpress = require('express');
//Morgan es un loger http
var oMorgan = require('morgan');

//Incluimos archivo de rutas
var oRouter = require('./routes/router');


var oBodyParser = require('body-parser');

//Seteamos la ruta hacia los archivos estáticos
var oPublicDir = oExpress.static(__dirname + '/public');

//Puerto utilizado para levantar el servidor
var iPort = 3000;
//Iniciamos el objeto express
var oApp = oExpress();

//Incluimos morgan a la aplicación
oApp.use( oMorgan('dev') );

//Reconoce los objetos json
oApp.use(oBodyParser.json());

//Incluimos en la app las rutas
oApp.use(oRouter);



//Le decimos a la aplicación donde se encuentran los archivos estáticos
oApp.use(oPublicDir)

//Le decimos a express que puerto debe escuchar para el servidor
oApp.listen(iPort, function() {
  console.log('Servidor corriendo en el puerto ' + iPort);
});


module.exports = oApp;
