var Actions = require('../actions/actions');

function initialize () {
$.get("https://jquery-pte.googlecode.com/files/jquery.pte.json", function(data) {
		Actions.receiveData(data);
	}
});