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
  },

  getBodegaByProduct: function(iId, fCallback){
    console.log(iId);
    oConnexion.query('SELECT b.bod_id,b.bod_nombre,SUM(t_in.inv_cantidad) AS inv_cantidad,'+
                    'DATE_FORMAT(t_in.inv_fecha,"%d/%m/%Y") AS niceDate  '+
                    'FROM tin_inventario t_in INNER JOIN tpr_producto t_pr ON (t_pr.pro_id = t_in.pro_id) '+
                    'INNER JOIN tbo_bodega b on (t_in.bod_id=b.bod_id) '+
                    'WHERE t_in.pro_id = ? GROUP BY b.bod_id,b.bod_nombre', iId, fCallback);
  }


};

module.exports = ProductoModel;
