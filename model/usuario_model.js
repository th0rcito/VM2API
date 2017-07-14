var oConnexion = require('./connexion.js');

var UsuarioModel = {

  add : function (oData, fCallback) {
    oConnexion.query('INSERT INTO tus_usuario SET ?', oData, fCallback);
  },

  getAll : function (fCallback) {
    oConnexion.query('SELECT * FROM tus_usuario', fCallback);
  },

  getById : function (iId, fCallback) {
    oConnexion.query('SELECT * FROM tus_usuario WHERE usu_id = ?', iId, fCallback);
  },

  //oData[0] = datos a actualizar
  //oData[1] = id de usuario
  update : function (oData, fCallback) {
    //console.log(oData);
    oConnexion.query('UPDATE tus_usuario SET ? WHERE usu_id = ?',oData, fCallback);
  },

  delete : function (iId, fCallback) {
    oConnexion.query('DELETE FROM tus_usuario WHERE usu_id = ?', iId, fCallback);
  }


};

module.exports = UsuarioModel;
