var oConnexion = require('./connexion.js');

var ProductoModel = {

  add : function (oData, fCallback) {
    oConnexion.query('INSERT INTO tpr_producto SET ?', oData, fCallback);
  },

  getAll : function (fCallback) {
    oConnexion.query('SELECT * FROM tpr_producto', fCallback);
  },

  getById : function (iId, fCallback) {
    oConnexion.query('SELECT * FROM tpr_producto WHERE pro_id = ?', iId, fCallback);
  },

  //oData[0] = datos a actualizar
  //oData[1] = id de usuario
  update : function (oData, fCallback) {
    //console.log(oData);
    oConnexion.query('UPDATE tpr_producto SET ? WHERE pro_id = ?',oData, fCallback);
  },

  delete : function (iId, fCallback) {
    oConnexion.query('DELETE FROM tpr_producto WHERE pro_id = ?', iId, fCallback);
  }

};

module.exports = ProductoModel;
