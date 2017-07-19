//Expess para manejar el servidor
var oExpress = require('express');
//Obtenemos el manejador de rutas de express
var oRouter = oExpress.Router();
//Objeto controlalador de las vistas
var oViewController = require('../controller/view_controller');

var oBodegaController = require('../controller/bodega_controller');
var oProductoController = require('../controller/producto_controller');
var oInventarioController = require('../controller/inventario_controller');
//Ruta que renderiza el home
oRouter.get('/', oViewController.getHome);
oRouter.get('/bodega', oViewController.getBodega);
oRouter.get('/inventario', oViewController.getInventario);
oRouter.get('/producto', oViewController.getProducto);
//BODEGA
oRouter.post('/api/bodega/add',oBodegaController.add);
oRouter.get('/api/bodega/getAll',oBodegaController.getAll);
oRouter.get('/api/bodega/getById/:id',oBodegaController.getById);
oRouter.put('/api/bodega/update',oBodegaController.update);
oRouter.delete('/api/bodega/delete/:id',oBodegaController.delete);
oRouter.get('/api/bodega/getProductById/:id',oBodegaController.getProductById);
//Producto
oRouter.post('/api/producto/add',oProductoController.add);
oRouter.get('/api/producto/getAll',oProductoController.getAll);
oRouter.get('/api/producto/getById/:id',oProductoController.getById);
oRouter.put('/api/producto/update',oProductoController.update);
oRouter.delete('/api/producto/delete/:id',oProductoController.delete);
oRouter.get('/api/producto/getBodegaByProduct/:id',oProductoController.getBodegaByProduct);


//Inventario
oRouter.get('/api/inventario/getAll',oInventarioController.getAll);

//Exportamos el módulo
module.exports=oRouter;
