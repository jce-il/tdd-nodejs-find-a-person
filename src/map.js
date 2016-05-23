
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
	var posts_contain_person_name = [];
	for(i=0; i<this._posts.length; i++)
	{
		if(this._posts[i].includes(name))
			posts_contain_person_name.push(this._posts[i]);
	}
	return posts_contain_person_name;
};

Map.prototype.check_location = function(name) {
	for(i=0; i<this._posts.length; i++)
	{
		if(this._posts[i].includes(name))
			return true;
	}
	return false;
};

Map.prototype.map_inconsistencies = function(name) {
	return false;
};

module.exports = Map;
