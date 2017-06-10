var React = require("react");
var Router = require('react-router');
var test = "test";
var helpers = require('../utils/helpers');

var Search = require('./Search');
var Query = require('./Query');
var Saved = require('./Saved');
var Header = require('./Header');

var Main = React.createClass({

	render: function() {
		return(
			<div className="container">
				<Header />
				<Search />
				<Query />
				<Saved />
			</div>
			
			
		)
	}
});
module.exports = Main;