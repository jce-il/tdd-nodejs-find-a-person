
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

	return false;
};

module.exports = Map;
