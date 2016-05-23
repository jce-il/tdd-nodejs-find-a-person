
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
	
  var Ret = [];
  for (i = 0; i<this._posts.length; i++) {
  	if (this._posts[i].search(name) != -1)
  		Ret.push(this._posts[i])
  }
  return Ret;
  };
  Map.prototype.matchesName = function(name) {
 	for (i = 0; i<this._posts.length; i++) {
 		if (this._posts[i].search(name) != -1)
 			return true;	
 	}
 	return false;
 };
 Map.prototype.mapIncons = function(name) {
 	
 	}
 	return false;
 };

module.exports = Map;
