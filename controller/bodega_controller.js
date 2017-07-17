var oBodegaModel = require('../model/bodega_model');

var BodegaController = {

  add : function (req, res, next) {
    var oData = {
      bod_nombre : req.body.nombre,
      bod_direccion :  req.body.direccion
    };
    console.log(oData.bod_nombre);
    console.log(oData.bod_direccion);
    oBodegaModel.add(oData, function(oError, oRow) {
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

    oBodegaModel.getAll(function(oError, oRow) {
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

    oBodegaModel.getById(iId, function(oError, oRow) {
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
      console.log('aki'+req.body.nombre);
    var oData = {
      bod_nombre : req.body.nombre,
      bod_direccion :  req.body.direccion
    };

    var bod_id = req.body.id;
    console.log(oData);
    oBodegaModel.update([oData, bod_id], function(oError, oRow) {
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

    oBodegaModel.delete(iId, function(oError, oRow) {
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

module.exports = BodegaController;
