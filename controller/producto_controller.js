var oProductoModel = require('../model/producto_model');

var ProductoController = {

  add : function (req, res, next) {
    var oData = {
      prod_nombre : req.body.nombre,
      prod_cantidad :  req.body.cantidad
    };

    oProductoModel.add(oData, function(oError, oRow) {
      var oRespuesta = {};
      if(oError) {
        oRespuesta.estado = 0;
        oRespuesta.msg = "Error en la inserción de datos",
        oRespuesta.descripcion = oError;
      } else {
        oRespuesta.estado = 1;
        oRespuesta.msg = "Los datos sean guardado satisfactoriamente"
      }
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(oRespuesta));
    });
  },

  getAll : function (req, res, next) {

    oProductoModel.getAll(function(oError, oRow) {
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
  },

  getById : function (req, res, next) {

    var iId = req.params.id

    oProductoModel.getById(iId, function(oError, oRow) {
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
  },

  update : function (req, res, next) {

    var oData = {
      prod_nombre : req.body.nombre,
      prod_cantidad :  req.body.cantidad
    };

    var iId = req.body.id;

    oProductoModel.update([oData, iId], function(oError, oRow) {
      var oRespuesta = {};
      console.info(oError);
      if(oError) {
        oRespuesta.estado = 0;
        oRespuesta.msg = "Error al actualizar los datos",
        oRespuesta.descripcion = oError;
      } else {
        oRespuesta.estado = 1;
        oRespuesta.msg = 'Actualizado correctamente'
      }
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(oRespuesta));
    });
  },

  delete : function (req, res, next) {

    var iId = req.params.id;

    oProductoModel.delete(iId, function(oError, oRow) {
      var oRespuesta = {};
      if(oError) {
        oRespuesta.estado = 0;
        oRespuesta.msg = "Error el registro",
        oRespuesta.descripcion = oError;
      } else {
        oRespuesta.estado = 1;
        oRespuesta.msg = 'Eliminado correctamente'
      }
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(oRespuesta));
    });
  }
};

module.exports = ProductoController;
