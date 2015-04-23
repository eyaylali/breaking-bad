var React = require('react');
var API = require('api/periodic_elements.js');

var Root = require('./components/root');

API.initialize()
React.render(<Root/>, document.getElementById("app"));


