var React = require('react');
var Router = require('react-router')

var Main = React.createClass({

	render: function(){

		return(

			<div className='main-container'>
				<h1>Main.js</h1>
				{this.props.children}
			</div>
			)
	}
});

module.exports = Main;