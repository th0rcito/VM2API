var status =0;


$(document ).ready(function() {
  listarRegistros();
  agregarBodega();
  addBodega2();
});

var agregarBodega =function(){
  $("#addB").on("click",function(event){
    status= 1;
    event.preventDefault();
   $('#modalBodega').modal('show');
   modalClean();
 });
}

var listarRegistros = function(){
  var table = $("#example").DataTable({
    "destroy":true,
    "ajax":{
      "method":"GET",
      "url":"http://localhost:3000/api/bodega/getAll"
    },
    "columns": [
      { "data": "bod_id" },
      { "data": "bod_nombre" },
      { "data": "bod_direccion" },
      {"defaultContent":"<button type='button' class='btn btn-info editar'><span class='glyphicon glyphicon-pencil'></span></button>         "+
                      "<button type='button' class='btn btn-danger eliminar'><span class='glyphicon glyphicon-trash'></span></button>        "+
                      "<button type='button' class='btn btn-primary mostrar'><span class='glyphicon glyphicon-list-alt'></span></button>        "
      }
    ]
  });
  registroEditar("#example tbody",table);
  registroEliminar("#example tbody",table);
  mostrarInfo("#example tbody",table);
}

var registroEditar = function(tbody, table){
  $("tbody").on("click","button.editar",function(){
    $('#modalBodega').modal('show');
    status = 0;
    var data=table.row($(this).parents("tr")).data();
    var idBodega = $("#idBodega").val(data.bod_id),
        nombreBodega=$("#nBodega").val(data.bod_nombre),
        direccionBodega=$("#dBodega").val(data.bod_direccion);
  });
}

var registroEliminar = function(tbody, table){
  $("tbody").on("click","button.eliminar",function(){
    var data=table.row($(this).parents("tr")).data();
    var idBodega = data.bod_id,
    nombreBodega=data.bod_nombre;
    bootbox.confirm({
      title: "Desea Eliminar "+nombreBodega,
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
          deleteBodega(idBodega);
          table.ajax.reload();
        }else{

        }

      }
    });
  });
}

var deleteBodega = function eliminarFromServer(idBodega){
  $.ajax('http://localhost:3000/api/bodega/delete/' + idBodega, {
  method: 'DELETE'
  }).then(function(jsonRespuesta) {
  });
}

var getDomain = function(){
  var oBodega ={};
  oBodega.id =parseInt($("#idBodega").val()),
  oBodega.nombre=$("#nBodega").val(),
  oBodega.direccion=$("#dBodega").val();
  if(isNaN(oBodega.id)){
    oBodega.id=999;
  }
  return oBodega;
}


var addBodega2= function(){
  console.log(555);
$("#saveB").click(function(event){
  event.preventDefault();
  var table = $("#example").DataTable();
  var data = getDomain();
  if(status==0){
    $.ajax('http://localhost:3000/api/bodega/update/', {
        method: 'PUT',
        contentType:"application/json",
        data : JSON.stringify(data)
      }).then(function(jsonRespuesta) {
        $('#modalBodega').modal('hide');
        table.ajax.reload();

      });
  }else{
      $.ajax('http://localhost:3000/api/bodega/add', {
        method: 'POST',
        contentType:"application/json",
        data : JSON.stringify(data)
      }).then(function(jsonRespuesta) {
        status=0;
        $('#modalBodega').modal('hide');
        table.ajax.reload();
      });
  }
  });

}


var modalClean = function(){
  $("#idBodega").val(''),
  $("#nBodega").val(''),
  $("#dBodega").val('');
}

var mostrarInfo = function(tbody, table){
  $("tbody").on("click","button.mostrar",function(){
    var data=table.row($(this).parents("tr")).data();
    $('#modalShow').modal('show');
    var idBodega = $("#idSBodega").val(data.bod_id),
    nombreBodega=$("#nSBodega").val(data.bod_nombre),
    direccionBodega=$("#dSBodega").val(data.bod_direccion);
    console.log();
    $.ajax('http://localhost:3000/api/bodega/getProductById/' + data.bod_id, {
    method: 'GET'
    }).then(function(jsonRespuesta) {
    $('#exampleS').DataTable( {
    "destroy":true,
    data: jsonRespuesta.data,
    columns: [
        { data: "pro_id" },
        { data: "prod_nombre" },
        { data: "inv_cantidad" }
    ]
    } );
    });

  });
}
