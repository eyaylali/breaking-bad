var React = require('react');
var InputForm = require('./form.js');
var Display = require('./display.js');
var Store = require('../stores/store')

var Root = React.createClass({
	getInitialState: function () {
	    return Store.getAppState();
	},
	onChange: function() {
		this.setState(Store.getAppState())
	},
	componentDidMount: function () {
	    Store.addChangeListener(this.onChange); 
	},
	render: function() {
    return (
    	<div className="display">
	    	<InputForm/>
	    	<Display inputPhrase={this.state.inputPhrase} elements={this.state.elements} />
	    </div>
    )
  }
});

module.exports = Root;
