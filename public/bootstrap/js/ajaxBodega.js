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
  method: 'GET',
  dataType: "json"
}).then(function(data) {
    console.log(data);
  $jQuery.forEach(function(oData){
    agregarRegistroDOM(oData);
  });
  });

});



function agregarRegistroDOM (oData) {
  var oTr = '<tr id="tr_bodega' + oData.bod_id + '">' +
              '<td id="td_bodega_id_' + oData.bod_id + '">' + oData.bod_id + '</td>' +
              '<td id="td_bodega_nombre_' + oData.bod_id + '">' + oData.bod_nombre +'</td>' +
              '<td id="td_bodega_direccion_' + oData.bod_id + '">' + oData.bod_direccion + '</td>' +
            '</tr>';
  document.getElementById('table_tbody').innerHTML =  document.getElementById('table_tbody').innerHTML + oTr;

}
