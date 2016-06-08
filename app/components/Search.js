// Include React and React-Router dependencies
var React = require('react');
var Router = require('react-router');

// Include the Query and Results componens
var Query = require('./Search/Query');
var Results = require('./Search/Results');

// Create the Main component
var Main = React.createClass({

	render: function(){

		return(

			<div className="main-container"> 
				This is search
				<Query />
				<Results />

			</div>

		)
	}
});

// Export the module back to the route
module.exports = Main;