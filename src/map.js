//Tom Matityahu
function Map(posts) {
	this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
	var i,j;
	var length = this._posts.length;
	var post = [];
	
	for(i = 0, j = 0; i < length; i++){
		if (this._posts[i].search(name) !== -1){
			post[j] = this._posts[i];
			j++;
		}
	}
	
	return post;
};

Map.prototype.find_a_location = function(name) {
	var i;
	var length = this._posts.length;
	var post = [];
	
	for(i = 0; i < length; i++){
		if (this._posts[i].search(name) !== -1)
			return true;
	}
	
	return false;
};

Map.prototype.check_inconsistencies_map = function(name) {
	return false;
}

module.exports = Map;