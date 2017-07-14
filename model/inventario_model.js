var oConnexion = require('./connexion.js');

var InventarioModel = {

  add : function (oData, fCallback) {
    oConnexion.query('INSERT INTO tbo_bodega SET ?', oData, fCallback);
  },

  getAll : function (fCallback) {
    oConnexion.query('SELECT t_pr.pro_id,t_pr.prod_nombre,t_pr.prod_unidad,sum(t_in.inv_cantidad) AS inv_cantidad '+
                    'FROM tin_inventario t_in INNER JOIN tpr_producto t_pr ON (t_in.pro_id = t_pr.pro_id) '+
                    'GROUP BY t_pr.pro_id,t_pr.prod_nombre,t_pr.prod_unidad', fCallback);
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

module.exports = InventarioModel;
