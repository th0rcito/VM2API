var options = {
	url: "http://localhost:3000/api/bodega/getAll",

	listLocation: "data",

	getValue: "data.bod_name"
};

$(document ).ready(function() {
  wea();
});
var wea = function(){
$("#listLocation").easyAutocomplete(options);
}
