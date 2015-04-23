var React = require('react');
var InitializeElements = require('./api/initialize_periodic_elements.js');
var Root = require('./components/root');


InitializeElements();
React.render(<Root/>, document.getElementById("app"));


