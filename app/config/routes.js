var React = require('react');
var Router = require('react-router');

// This will draw from each of the components
var Main = require('../components/Main');
var Search = require('../components/Search');
/*var Saved  = require('../components/Saved');*/

// We will then pull the router 
var Route = Router.Route;

//  This is the catchall route
var IndexRoute	= Router.IndexRoute;

module.exports = (

	<Route path='/' component ={Main} >

	
	<Route path='/' component ={Search} />
{/*	<Route path='/' component ={Saved} />*/}

	<indexRoute component ={Main} />
</Route>

);