var status =0;


$(document ).ready(function() {
  listarProductos();
  console.log('carga');
   agregarProducto();
  addProducto();
});

var agregarProducto =function(){
  $("#addP").on("click",function(event){
    status= 1;
    event.preventDefault();
   $('#modalProducto').modal('show');
   modalClean();
 });
}

var listarProductos = function(){
  var table = $("#exampleProducto").DataTable({
    "destroy":true,
    "ajax":{
      "method":"GET",
      "url":"http://localhost:3000/api/producto/getAll"
    },
    "columns": [
      { "data": "pro_id" },
      { "data": "prod_nombre" },
      { "data": "prod_unidad" },
      {"defaultContent":"<button type='button' class='btn btn-info editar'><span class='glyphicon glyphicon-pencil'></span></button>         "+
                      "<button type='button' class='btn btn-danger eliminar'><span class='glyphicon glyphicon-trash'></span></button>        "+
                      "<button type='button' class='btn btn-primary mostrar'><span class='glyphicon glyphicon-list-alt'></span></button>        "
      }
    ]

  });
    productoEditar("#exampleProducto tbody",table);
    productoEliminar("#exampleProducto tbody",table);
    mostrarInfo("#example tbody",table);
}

var productoEditar = function(tbody, table){
  $("tbody").on("click","button.editar",function(){
    $('#modalProducto').modal('show');
    status = 0;
    var data=table.row($(this).parents("tr")).data();
    var idProducto = $("#idProducto").val(data.pro_id),
        nombreProducto=$("#nProducto").val(data.prod_nombre),
        unidadProducto=$("#uProducto").val(data.prod_unidad);
  });
}

var productoEliminar = function(tbody, table){
  $("tbody").on("click","button.eliminar",function(){
    var data=table.row($(this).parents("tr")).data();
    var idProducto = data.pro_id,
    nombreProducto=data.prod_nombre;
    bootbox.confirm({
      title: "Desea Eliminar "+nombreProducto,
      message: "Do you want to activate the Deathstar now? This cannot be undone.",
      buttons: {
          cancel: {
              label: '<i class="fa fa-times"></i> Cancel'
          },
          confirm: {
              label: '<i class="fa fa-check"></i> Confirm'
          }
      },
      callback: function (result) {
        console.log('This was logged in the callback: ' + result);
        if(result){
          deleteProducto(idProducto);
          table.ajax.reload();
        }else{

        }

      }
    });
  });
}

var deleteProducto = function eliminarFromServer(idProducto){
  $.ajax('http://localhost:3000/api/producto/delete/' + idProducto, {
  method: 'DELETE'
  }).then(function(jsonRespuesta) {
  });
}

var getDomain = function(){
  var oProducto ={};
  oProducto.id =parseInt($("#idProducto").val()),
  oProducto.nombre=$("#nProducto").val(),
  oProducto.unidad=$("#uProducto").val();
  if(isNaN(oProducto.id)){
    oProducto.id=999;
  }
  return oProducto;
}


var addProducto= function(){
  console.log();
$("#saveP").click(function(event){
  event.preventDefault();
  var table = $("#exampleProducto").DataTable();
  var data = getDomain();
  if(status==0){
    console.log(data);
    $.ajax('http://localhost:3000/api/producto/update', {
        method: 'PUT',
        contentType:"application/json",
        data : JSON.stringify(data)
      }).then(function(jsonRespuesta) {
        $('#modalProducto').modal('hide');
        table.ajax.reload();

      });
  }else{
    console.log(data);
      $.ajax('http://localhost:3000/api/producto/add', {
        method: 'POST',
        contentType:"application/json",
        data : JSON.stringify(data)
      }).then(function(jsonRespuesta) {
        status=0;
        $('#modalProducto').modal('hide');
        table.ajax.reload();
      });
  }
  });

}


var modalClean = function(){
  $("#idProducto").val(''),
  $("#nProducto").val(''),
  $("#uProducto").val('');
}

var mostrarInfo = function(tbody, table){
  $("tbody").on("click","button.mostrar",function(){
    var data=table.row($(this).parents("tr")).data();
    $('#productoShow').modal('show');
    var idProducto = $("#idSProducto").val(data.pro_id),
        nombreProducto=$("#nSProducto").val(data.prod_nombre),
        unidadProducto=$("#uSProducto").val(data.prod_unidad);
    console.log(data);
    $.ajax('http://localhost:3000/api/producto/getBodegaByProduct/' + data.pro_id, {
    method: 'GET'
    }).then(function(jsonRespuesta) {
    $('#exampleSP').DataTable( {
    "destroy":true,
    data: jsonRespuesta.data,
    columns: [
        { data: "bod_id" },
        { data: "bod_nombre" },
        { data: "inv_cantidad" },
        { data: "niceDate"},
    ]
    } );
    });

  });
}
