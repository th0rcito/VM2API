//Manejador de rutas
var oPath = require('path');

var ViewController = {

  getHome : function (req, res, next) {
      res.sendFile(oPath.resolve('view/index1.html') );
  },
  getBodega : function (req, res, next) {
      res.sendFile(oPath.resolve('view/bodega.html') );
  },
  getInventario : function (req, res, next) {
      res.sendFile(oPath.resolve('view/inventario.html') );
  },
  getProducto : function (req, res, next) {
      res.sendFile(oPath.resolve('view/producto.html') );
  }

};

module.exports = ViewController;
