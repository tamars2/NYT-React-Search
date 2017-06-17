var React = require("react");
var Router = require('react-router');
var test = "test";
var helpers = require('../utils/helpers');
var axios = require('axios');

var Search = require('./Search');
var Query = require('./Query');
var Saved = require('./Saved');
var Header = require('./Header');

var Main = React.createClass({

	getInitialState: function() {
		return { 
			topic: "", 
			start: "", 
			end: "", 
			results: [], 
			savedArticles: []
		}
	},

	setParent: function(topic, start, end) {
		this.setState({
			topic: topic,
			startYear: start,
			endYear: end
		});
	},

	saveArticle: function(title, date, url) {
		helpers.postArticle(title, date, url);
		this.getArticle();
	},

	deleteArticle: function(article) {
		axios.delete('/api/saved/' + article._id)
			.then(function(response){
				this.setState({
					savedArticles: response.data
				});
				return response;
			}.bind(this));

		this.getArticle();
	},

	// getArticle: function() {
	// 	axios.get('/api/saved')
	// 		.then(function(response){
	// 			this.setState({
	// 				savedArticles: response.data
	// 			});
	// 		}.bind(this));
	// },

	componentDidUpdate: function(prevProps, prevState) {
		//holy crap, this took me forever to fix.  I was receiving http 429 due to
		//repeated queries going over the max limit for the NYT api
		//if the current state of topic is not the same as previous state
		//then run the query
		if(this.state.topic != prevState.topic) {
		helpers.runQuery(this.state.topic, this.state.start, this.state.end)
      		.then(function(data) {
        		this.setState({ results: data});
      }.bind(this));
      }
	},

	// componentDidMount: function() {
	// 	//display saved articles
	// 	axios.get('/api/saved')
	// 		.then(function(response){
	// 			this.setState({
	// 				savedArticles: response.data
	// 			});
	// 		}.bind(this));

	// },
	
	render: function() {
		return(
			<div className="container">
				<div className="container">
					<div className="jumbotron">
						<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i>  NYT (an exercise in React)</strong></h1>
					</div>
				</div>
				<Search setParent={this.setParent} />
				<Query results={this.state.results} savedArticle={this.savedArticle}/>
				<Saved savedArticles={this.state.savedArticles} deleteArticle={this.state.deleteArticle} />
			</div>
			
			
		)
	}
});
module.exports = Main;