var React = require('react');
var Router = require('react-router')

var Main = React.createClass({

	render: function(){

		return(

			<div className='container'>
				<nav>
					<div className="nav-wrapper">
						<a href="" className="brand-logo"><img src="../public/images/logo.gif" /></a>
						<ul className="nav-mobile" className="right hide-on-med-and-down">
							<li><a href="">Search</a></li>
							<li><a href="">Saved</a></li>
						</ul>
					</div>
				</nav>
				<div className="row">
					<div className="col s12">
						<img src="../public/images/img.jpg" alt="movies"  width="100%" height="600px"/>
						<hr/>
					</div>
				</div>
				{this.props.children}
			</div>
			)
	}
});

module.exports = Main;