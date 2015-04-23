var Actions = require('../actions/actions');

function initialize () {
	$.get('periodic_data.json', function(data) {
		Actions.receiveData(data);
	});
}

module.exports = initialize;
