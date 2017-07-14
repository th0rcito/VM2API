var oUsuarioModel = require('../model/usuario_model');

var ApiController = {

  add : function (req, res, next) {
    var oData = {
      usu_nombre : req.body.nombre,
      usu_apellido :  req.body.apellido
    };

    oUsuarioModel.add(oData, function(oError, oRow) {
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

    oUsuarioModel.getAll(function(oError, oRow) {
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

    oUsuarioModel.getById(iId, function(oError, oRow) {
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
      usu_nombre : req.body.nombre,
      usu_apellido :  req.body.apellido
    };

    var iId = req.body.id;

    oUsuarioModel.update([oData, iId], function(oError, oRow) {
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

    oUsuarioModel.delete(iId, function(oError, oRow) {
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

module.exports = ApiController;
