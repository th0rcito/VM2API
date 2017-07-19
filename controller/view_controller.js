//Manejador de rutas
var oPath = require('path');

var ViewController = {

  getHome : function (req, res, next) {
      res.sendFile(oPath.resolve('view/inventario.html') );
  },
  getBodega : function (req, res, next) {
      res.sendFile(oPath.resolve('view/bodega.html') );
  },
  getProducto : function (req, res, next) {
      res.sendFile(oPath.resolve('view/producto.html') );
  }

};

module.exports = ViewController;
