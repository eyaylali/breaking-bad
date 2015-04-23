var React = require('react');
var Actions = require('../actions/actions.js')

var InputForm = React.createClass({
	getInitialState: function(){
		return {
			text : ""
		}
	},
	onChange: function(e) {
		this.setState({
			text: e.target.value
		})
	},
	onClick: function() {
		Actions.updatePhrase(this.state.text);
	},
	render: function() {
	return (
		<div id="form">
			<input onChange={this.onChange} value={this.state.text} />
			<button onClick={this.onClick}>{'SUBMIT'}</button>
		</div>
	)
}
});


module.exports = InputForm;