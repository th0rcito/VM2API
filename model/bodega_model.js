var oConnexion = require('./connexion.js');

var BodegaModel = {

  add : function (oData, fCallback) {
    oConnexion.query('INSERT INTO tbo_bodega SET ?', oData, fCallback);
  },

  getAll : function (fCallback) {
    oConnexion.query('SELECT * FROM tbo_bodega', fCallback);
  },

  getById : function (iId, fCallback) {
    oConnexion.query('SELECT * FROM tbo_bodega WHERE bod_id = ?', iId, fCallback);
  },

  //oData[0] = datos a actualizar
  //oData[1] = id de usuario
  update : function (oData, fCallback) {
    //console.log(oData);
    oConnexion.query('UPDATE tbo_bodega SET ? WHERE bod_id = ?',oData, fCallback);
  },

  delete : function (iId, fCallback) {
    oConnexion.query('DELETE FROM tbo_bodega WHERE bod_id = ?', iId, fCallback);
  }

};

module.exports = BodegaModel;
