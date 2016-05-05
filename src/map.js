
function Map(posts) {

  this._posts = posts;
};

Map.prototype.find_a_person = function(name) {

	var res = [];
	var i;
	for(i = 0; i < 3; i++)
	{
		if(this._posts[i].indexOf(name) > -1)
		{
			res.push(this._posts[i]);
		}
	}
	return res;
};

Map.prototype.check_for_location = function(name) {

	var posts = this.find_a_person(name);
	var indexOfAt = 0;

	for(i = 0; i < posts.length; i++)
	{
		indexOfAt = posts[i].indexOf("at");
		if(indexOfAt > -1)
		{
			if(posts[i][indexOfAt + 3] === posts[i][indexOfAt + 3].toUpperCase()){

				return "True";
			}
		}
	}
	return "False";
};

Map.prototype.check_for_map_inconsistencies = function(name) {

	var posts = this.find_a_person(name);
	var indexOfAt = 0;
	var places = [];
	var numOfPlaces = 0;

	for(i = 0; i < posts.length; i++)
	{
		indexOfAt = posts[i].indexOf("at");
		if(indexOfAt > -1)
		{
			var splitedPost = posts[i].split(" "); 
			for (var j = 0 ; j < splitedPost.length; j++)
			{
				if(splitedPost[j] == "at")
				{
					if( (j+1 < splitedPost.length) &&  splitedPost[j+1][0] === splitedPost[j+1][0].toUpperCase() ) 
					{
						places.push(splitedPost[j+1]);
						numOfPlaces++;

					}
				}
			}

				
		}
	}
		//check for multiple locations
		if(numOfPlaces > 1)
		{
			for (var i = 0 ; i < numOfPlaces ; i++)
			{
				for (var j = 0 ; j < numOfPlaces ; j++)
				{
					if(places[i] != places[j])
					{
						return "True";
					}
				}
			}
		}

		return "False";
}


module.exports = Map;
