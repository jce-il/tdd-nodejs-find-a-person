
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
	var arr = [];
	for (var i=0; i<this._posts.length; i++)
		if (this._posts[i].indexOf(name) >= 0)
			arr.push(this._posts[i]);
	return arr;
};

Map.prototype.find_a_person_with_location = function(name) {
	return false;
};

module.exports = Map;
