var React = require('react');
var router = require('react-router');

var Saved = React.createClass({

	render: function(){
		return(
			<div class="row">
            <div class="col-lg-12">
                ​
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h1 class="panel-title"><strong><i class="fa fa-list-alt"></i>  Results</strong></h1>
                    </div>
                    <div class="panel-body">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <h3>
							  	<span><em>Aliens Invade Paris</em></span>
								<span class="btn-group pull-right" >
									<button class="btn btn-default ">View Article</button>
									<button class="btn btn-primary">Save</button>
								</span> 
							</h3>
                                <p>Date Published: 03/15/16</p>
                            </li>
                            ​
                            <li class="list-group-item">
                                <h3>
							  	<span><em>Obama Gives Commencement Speech</em></span>
								<span class="btn-group pull-right" >
									<button class="btn btn-default ">View Article</button>
									<button class="btn btn-primary">Save</button>
								</span> 
							</h3>
                                <p>Date Published: 03/15/16</p>
                                ​
                            </li>
                            ​
                            <li class="list-group-item">
                                <h3>
							  	<span><em>AIDS is Cured!</em></span>
								<span class="btn-group pull-right" >
									<button class="btn btn-default ">View Article</button>
									<button class="btn btn-primary">Save</button>
								</span> 
							</h3>
                                <p>Date Published: 03/15/16</p>
                                ​
                            </li>
                            ​
                            <li class="list-group-item">
                                <h3>
							  	<span><em>Knicks Win Championship</em></span>
								<span class="btn-group pull-right" >
									<button class="btn btn-default ">View Article</button>
									<button class="btn btn-primary">Save</button>
								</span> 
							</h3>
                                <p>Date Published: 03/15/16</p>
                            </li>
                            ​
                            <li class="list-group-item">
                                <h3>
							  	<span><em>Mud: The New Superfood?</em></span>
								<span class="btn-group pull-right" >
									<button class="btn btn-default ">View Article</button>
									<button class="btn btn-primary">Save</button>
								</span> 
							</h3>
                                <p>Date Published: 03/15/16</p>
                            </li>
                        </ul>
                    </div>
                </div>
                ​
            </div>
        </div>
			)
	}
})







module.exports = Saved;