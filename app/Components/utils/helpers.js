var axios = require('axios');

var helpers = {

	runQuery: function(movies){
		var queryURL = "https://www.omdbapi.com/?t="+movies+"&y=&plot=full";


		return axios.get(queryURL)
			.then(function(results){
				console.log("helpers");
				console.log(results.data);
				return results.data;
		});

	}

}


module.exports = helpers;