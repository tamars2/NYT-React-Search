var React = require("react");
var Router = require('react-router');
var test = "test";
var helpers = require('../utils/helpers');

var Search = React.createClass({
  getInitialState: function() {
    return {
      searchQuery: "",
      term: "",
      begin: "",
      end: "",
      results: []
    };
  },
  componentDidUpdate: function(prevProps, prevState) {
        if(prevState.searchQuery !== this.state.searchQuery) {
          helpers.runQuery(this.state.searchQuery)
            .then(function(data) {
              if(data != this.state.results) {
                this.setState({results: data});
              }
            }.bind(this));
        }

  },

  postSaved: function(article) {
    helpers.postSavedArticle(article);
  },

  handleTermChange: function(event) {

    this.setState({ term: event.target.value });

  },
  handleBeginChange: function(event) {

    this.setState({ begin: event.target.value });

  },
  handleEndChange: function(event) {

    this.setState({ end: event.target.value });

  },
  
  handleSubmit: function(event) {
    event.preventDefault();
    console.log("TEST " + this.state.term);
    console.log("TEST " + this.state.begin);
    console.log("TEST " + this.state.end);
    helpers.runQuery(this.state.term, this.state.begin, this.state.end)
      .then(function(data) {
        console.log(" HANDLE SUBMIT " + data);

      });
    this.setState({});
  },

  render: function() {
    return (
      <div className="row">
        <div className="col-sm-12">
        <br />
          <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa fa-list-alt"></i> Search</strong></h3>
          </div>
          <div className="panel-body">
            <form role="form">      
              <div className="form-group">
                <label htmlFor="search">Search Term:</label>
                <input value={this.state.term} type="text" className="form-control" id="term" onChange={this.handleTermChange} />
              </div>
              <div className="form-group">
                <label htmlFor="start-year">Start Year (Optional):</label>
                <input value={this.state.begin} type="text" className="form-control" id="begin" onChange={this.handleBeginChange} />
              </div>
              <div className="form-group">
                <label htmlFor="end-year">End Year (Optional):</label>
                <input value={this.state.end} type="text" className="form-control" id="end" onChange={this.handleEndChange} />
              </div>
              <button href="#" type="submit" className="btn btn-default" id="run-search" onClick={this.handleSubmit}><i className="fa fa-search"></i>  Search</button>
              <button type="button" className="btn btn-default" id="clear-all"><i className="fa fa-trash"></i>  Clear Results</button>
            </form>
          </div>
        </div>
        </div>
        <div className="col-sm-12">
        <br />
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Search Results</strong></h3>
          </div>
          <div className="panel-body" id="well-section">
          </div>
        </div>
        </div>
        </div>
    )
  }
});

module.exports = Search;