var React = require("react");
var Router = require('react-router');
var test = "test";
var helpers = require('../utils/helpers');

var Search = require('./Search');
var Query = require('./Query');
var Saved = require('./Saved');
var Header = require('./Header');

var Main = React.createClass({

	// getInitialState: function() {
	// 	return { topic: "", start: "", end: "", articles: []};
	// },

	// setArticles: function(newArticles) {
	// 	this.setState({articles: newArticles})
	// },

	// search: function(topic, start, end) {
	// 	if (topic === '' || start === '' || end === '') {
	// 		this.setState({ articles: []});
	// 	} else {
	// 		axios.get('/articles/' + topic + '/' + start + '/' + end)
	// 			.then(function(response) {
	// 				this.setState({articles: response.data})
	// 			}.bind(this))
	// 				.catch(function(error) {
	// 					console.log(error);
	// 					this.setState({articles: []});
	// 				});
	// 	}
	// },

	render: function() {
		return(
			<div className="container">
				<div className="container">
					<div className="jumbotron">
						<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i>  NYT (an exercise in React)</strong></h1>
					</div>
				</div>
				<Search />
				<Saved />
			</div>
			
			
		)
	}
});
module.exports = Main;