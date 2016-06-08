var React = require('react');
var router = require('react-router');

var Main = React.createClass({

	render: function() {
		return (
			<div className="main-container">
				<div class="row">
					<div class="col-lg-12">
						<div class="panel-heading">
							<h1 class="panel-title"><strong><i class="fa fa-newspaper-o"
							aria-hidden="true"></i>Query</strong></h1>
						</div>
						<div class="panel-body">
							<form>
								<div class="form-group">
									<h4 class=""><strong>Topic</strong></h4>
									<input type="text" class="form-control" id="search-topic"/>
									<h4 class=""><strong>Topic</strong></h4>
									<input type="text" class="form-control" id="search-start"/>
									<h4 class=""><strong>Topic</strong></h4>
									<input type="text" class="form-control" id="search-end"/>
								</div>
							    <div class="pull-right">
                                	<button type="submit" class="btn btn-danger">
                                  	  <h4>Submit</h4></button>
                            	</div>
							</form>
					</div>
				</div>
			</div>
		</div>
			)
	}
})







module.exports = Main;