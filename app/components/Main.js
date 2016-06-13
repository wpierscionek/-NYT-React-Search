var React = require('react');
var Form = require('./Children/Form');
var Results = require('./Children/Results');
var helpers = require('./utils/helpers.js');


var Main = React.createClass({

	getInitialState: function(){
		return {
			searchTerm: "",
			results: ""
		}
	},	

	setTerm: function(term){
		this.setState({
			searchTerm: term
		})
	},

	componentDidUpdate: function(prevProps, prevState){

		if(prevState.searchTerm != this.state.searchTerm){
			console.log("UPDATED");

			helpers.runQuery(this.state.searchTerm)
				.then(function(data){
					if (data != this.state.results)
					{
						console.log("HERE");

						this.setState({
							results: data
						})		
					}


				}.bind(this))		
		}
	},


	render: function(){

		return(

			<div className="container">
				<nav>
					<div className="nav-wrapper">
						<a href="" className="brand-logo">IMovie</a>
						<ul className="nav-mobile" className="right hide-on-med-and-down">
							<li><a href="#/form">Search</a></li>
							<li><a href="#/results">Saved</a></li>
						</ul>
					</div>
				</nav>
					<div className="row">
						<Form setTerm={this.setTerm} />
						<Results list={this.state.results} />
					</div>
			</div>
		)
	}
});

module.exports = Main;