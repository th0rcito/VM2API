var oMysql = require('mysql');
var oConf = require('./config.json');

var oBdOption = {
  host : oConf.host,
  user : oConf.usuario,
  password : oConf.password,
  port : oConf.puerto,
  database : oConf.nombre_bd
};

var oConnexion = oMysql.createConnection(oBdOption);

oConnexion.connect(function(oError) {
  if(oError) {
    console.log(oError);
    console.log('Error al conectar a la base de datos');
  } else {
    console.log('Conexión a base datos realizada correctamente');
  }
});

module.exports=oConnexion;
