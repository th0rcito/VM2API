var oInventarioModel = require('../model/inventario_model');

var oInventarioController = {

  getAll : function (req, res, next) {

    oInventarioModel.getAll(function(oError, oRow) {
      var oRespuesta = {};
      if(oError) {
        oRespuesta.estado = 0;
        oRespuesta.msg = "Error al obtener los datos",
        oRespuesta.descripcion = oError;
      } else {
        oRespuesta.estado = 1;
        oRespuesta.data = oRow
      }
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(oRespuesta));
    });
  }
};

module.exports = oInventarioController;
