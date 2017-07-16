$(document ).ready(function() {
  listarRegistros();
});


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
                      "<button type='button' class='btn btn-danger eliminar'><span class='glyphicon glyphicon-trash'></span></button>"
      }
    ]
  });
  registroEditar("#example tbody",table);
  registroEliminar("#example tbody",table);
}

var registroEditar = function(tbody, table){
  $("tbody").on("click","button.editar",function(){
    var data=table.row($(this).parents("tr")).data();
    console.log(data);
  });
}

var registroEliminar = function(tbody, table){
  $("tbody").on("click","button.eliminar",function(){
    var data=table.row($(this).parents("tr")).data();
    console.log(data);
  });
}
