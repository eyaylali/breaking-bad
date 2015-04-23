var React = require('react');


var Display = React.createClass({
	render: function() {
		var elementsArray = this.props.elements;
		var inputPhrase = this.props.inputPhrase;
		var outputArray 
	return (
		<div id="display">
			<p>{inputPhrase}</p>
		</div>
	)
  }
});

module.exports = Display;
