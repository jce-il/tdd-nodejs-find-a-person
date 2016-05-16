
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
  
	var res = [];
 	var i;
 	for(i = 0; i < this._posts.length; i++)
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
	var index, i;

	for(i = 0; i < posts.length; i++)
	{
		index = posts[i].indexOf("at");
		if(index > -1)
		{
			if(posts[i][index + 3] === posts[i][index + 3].toUpperCase())
			{
				return true;
			}
		}
	}
	return false;
};

module.exports = Map;
