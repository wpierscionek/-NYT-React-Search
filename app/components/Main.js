var React = require('react');
var Router = require('react-router');

var Main = React.createClass({

	render: function() {
		return (
			<div clasName="main-container">
			    <div className="container">
			        <div className="row">
			            <div className="col-lg-12">
			                <div class="panel-heading">
			                    <h1 className="panel-title"><strong><i class="fa fa-newspaper-o"
			                            aria-hidden="true"></i>Query</strong></h1>
			                </div>
			                <div className="panel-body">
			                    <form>
			                        <div className="form-group">
			                            <h4 class=""><strong>Topic</strong></h4>
			                            <input type="text" className="form-control" id="search-topic" />
			                            <h4 className=""><strong>Topic</strong></h4>
			                            <input type="text" className="form-control" id="search-start" />
			                            <h4 class=""><strong>Topic</strong></h4>
			                            <input type="text" className="form-control" id="search-end" />
			                        </div>
			                        <div class="pull-right">
			                            <button type="submit" className="btn btn-danger">
			                                <h4>Submit</h4></button>
			                        </div>
			                    </form>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
			)
	}
})







module.exports = Main;