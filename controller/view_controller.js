//Manejador de rutas
var oPath = require('path');

var ViewController = {

  getHome : function (req, res, next) {
      res.sendFile(oPath.resolve('view/index.html') );
  }

};

module.exports = ViewController;
