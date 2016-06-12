var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var IndexRoute	= Router.IndexRoute;

var Main = require('../components/Main');
var Saved = require('../components/Saved'); 
var Search = require('../components/Search'); 

module.exports = (

	<Route path='/' component={Main}>

		<Route path='Saved' component={Saved} />
		<Route path='Search' component={Search} />

		<IndexRoute component={Search} />

	</Route>


);