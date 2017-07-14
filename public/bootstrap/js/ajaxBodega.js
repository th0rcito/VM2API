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
// });

$(document ).ready(function() {
  $.ajax('http://localhost:3000/api/bodega/getAll', {
    method: 'GET'
  }).then(function(jsonRespuesta) {
    jQuery.each(jsonRespuesta.data, function(index, itemData) {
      console.log(itemData);

    agregarRegistroDOM(itemData);
    });
    $('#example').DataTable( );

  });

});



function agregarRegistroDOM (oData) {
  var oTr = '<tr id="tr_bodega' + oData.bod_id + '">' +
              '<td id="td_bodega_id_' + oData.bod_id + '">' + oData.bod_id + '</td>' +
              '<td id="td_bodega_nombre_' + oData.bod_id + '">' + oData.bod_nombre +'</td>' +
              '<td id="td_bodega_direccion_' + oData.bod_id + '">' + oData.bod_direccion + '</td>' +
            '</tr>';
  document.getElementById('tbody_bodega').innerHTML =  document.getElementById('tbody_bodega').innerHTML + oTr;

}
