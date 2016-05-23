
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
	
	var x,y;
 	var post = [];
 	
 	for(x = 0, y = 0; x < (this._posts.length); x++){
 		if (this._posts[x].search(name) !== -1){
 			post[y] = this._posts[x];
 			y++;
 		}
 	}
 	
 	return post;
};

Map.prototype.find_a_location = function(name) {
	var x;
 	var post = [];
 	
 	for(x = 0; x < (this._posts.length); x++){
 		if (this._posts[x].search(name) !== -1)
 			return true;
 	}
	
 	return false;
};

Map.prototype.check_inconsistencies_map = function(name) {
	var p = this.find_a_person(p);
 	
 	if (p.length > 1)
 		return true;
	
	return false;
}

Map.prototype.check_if_visited = function(name, location) {
	return false;
}

module.exports = Map;
