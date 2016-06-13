var React = require('react');

var Form = React.createClass({

	getInitialState: function(){
		return {
			term: ""
		}
	},

	handleChange: function(event){

    	// See this Stack Overflow answer for more details: 
    	// http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);

	},

	handleClick: function(){

		console.log("CLICK");
		console.log(this.state.term);
		
		this.props.setTerm(this.state.term);

	},

	render: function(){

		return(

			<div className="row">
				<div className="col s6 offset-s3">
						<form>
							<h2 className="center-align"><i>Search</i></h2>
							<div className="input-field">
								<label for="search"><i className="material-icons">search</i></label>
								<input type="text" className="form-control text-center" id="term" onChange= {this.handleChange} required/>
								<button type="button" className="btn waves-effect waves-light" onClick={this.handleClick}>Submit</button>
							</div>
						</form>
				</div>
			</div>



		)
	}
});

module.exports = Form;