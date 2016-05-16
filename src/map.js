
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
	for (var i=0; i<this._posts.length; i++)
		if (this._posts[i].indexOf(name) >= 0 && this._posts[i].indexOf(" at ") >= 0)
			return true;

	return false;
};

Map.prototype.check_inconsistencies = function() {
	for (var i=0; i<this._posts.length; i++) {
		
		//split into words in order to find names
		var post = this._posts[i].split(" ");
		
		//find person names until "at" keyword
		for (var j=0; j<post.length && post[j] != "at"; j++) {
			//if a name exists more than once return true
			if (this.find_a_person(post[j]).length > 1)
				return true;
		}
	}
	
	return false;
};


module.exports = Map;
