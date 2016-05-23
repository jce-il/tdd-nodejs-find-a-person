
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

module.exports = Map;
