var Actions = require('../actions/actions');

function initialize () {
	$.get('periodic_data.json', function(data) {
		Actions.receiveData(data);
	});
}

// function initialize () {
// 	$.ajax({
// 		type: "GET",
// 		url: "https://jquery-pte.googlecode.com/files/jquery.pte.json",
// 		dataType: "jsonp",
// 		success: function(data){
// 			Actions.receiveData(data);
//   		}
// 	});
// }



module.exports = initialize;
