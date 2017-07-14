// $(document ).ready(function() {
//   console.log("s");
//   $.ajax({
//    type: "GET",
//    dataType: "json",
//    url: "http://localhost:3000/api/bodega/getAll",
//    success: function(data){
//      console.log(data);
//      agregarRegistroDOM(data);
//    }
//   });
// });api/bodega/delete/

$(document ).ready(function() {
  $.ajax('http://localhost:3000/api/bodega/getAll', {
    method: 'GET'
  }).then(function(jsonRespuesta) {
    jQuery.each(jsonRespuesta.data, function(index, itemData) {
      console.log(itemData);

    agregarRegistroDOM(itemData);
    });
    $('#example').DataTable( );
    agregarAccionEliminar();
  });

});

function agregarAccionEliminar(){
 $(".eliminar").click(function(){
   var bId = $(this).attr("data-id");
   console.log(bId);
   eliminarFromServer(bId);
 });
}


function agregarRegistroDOM (oData) {
  var oTr = '<tr id="tr_bodega_' + oData.bod_id + '">' +
              '<td id="td_bodega_id_' + oData.bod_id + '">' + oData.bod_id + '</td>' +
              '<td id="td_bodega_nombre_' + oData.bod_id + '">' + oData.bod_nombre +'</td>' +
              '<td id="td_bodega_direccion_' + oData.bod_id + '">' + oData.bod_direccion + '</td>' +
              '<td><button type="button" class="btn btn-info" id="bodega_edit_'+oData.bod_id+'" data-id="'+oData.bod_id+'"><span class="glyphicon glyphicon-pencil"></span></button>'+
                '&nbsp &nbsp &nbsp'+'<button type="button" class="btn btn-danger eliminar" id="bodega_delete_'+oData.bod_id+'" data-id="'+oData.bod_id+'"><span class="glyphicon glyphicon-trash"></span></button>'+
              '</td>'+
            '</tr>';
  document.getElementById('tbody_bodega').innerHTML =  document.getElementById('tbody_bodega').innerHTML + oTr;

}


function eliminarFromServer (iId) {

  $.ajax('http://localhost:3000/api/bodega/delete/' + iId, {
    method: 'DELETE'
  }).then(function(jsonRespuesta) {
    document.getElementById('tr_bodega_' + iId).remove();
  })
  }
