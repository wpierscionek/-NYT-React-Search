var React = require('react');

var Results = React.createClass({

	render: function(){
	if (!this.props.list){
		return(
			<p>Enter a movie to start the search</p>
			)
	}

	else{
		console.log("working?")
		console.log(this.props.list);
		var movies = this.props.list;
	return(
	<div className="row">
				<div className="col s12">
					<ul className="collection with-header" >
						<li className="collection-header"><h4>Results</h4></li>
						<li className="collection-item"><h5 className="left-align"><b>{movies.Title}</b></h5>
					<div className="col s6">
						<h4 className="left-align">Summary</h4>
						<p className="left-align">{movies.Plot}</p>
						<p className="left-align"><b>Genre: </b>{movies.Genre}<br/><b>Released:</b> {movies.Released}<br/><b>Runtime: </b>{movies.Runtime}<br/><b>Rating:</b> {movies.imdbRating}</p>
						<button type="button" className="btn waves-effect waves-light">Save</button>
					</div>
					<div className="col s4">
						<img src={movies.Poster} alt={movies.Title} width="100%" />
					</div>
						</li>
					</ul>
				</div>
			</div>
)
	}
}
});

module.exports = Results;