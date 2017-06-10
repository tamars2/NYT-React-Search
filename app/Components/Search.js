var React = require("react");
var Router = require('react-router');
var test = "test";
var helpers = require('../utils/helpers');

var Search = React.createClass({
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
                <input type="text" className="form-control" id="search-term" />
              </div>
              <div className="form-group">
                <label htmlFor="start-year">Start Year (Optional):</label>
                <input type="text" className="form-control" id="start-year" />
              </div>
              <div className="form-group">
                <label htmlFor="end-year">End Year (Optional):</label>
                <input type="text" className="form-control" id="end-year" />
              </div>
              <button href="" type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search"></i>  Search</button>
              <button type="button" className="btn btn-default" id="clear-all"><i className="fa fa-trash"></i>  Clear Results</button>
            </form>
          </div>
        </div>
        </div>
        </div>
    )
  }
});

module.exports = Search;