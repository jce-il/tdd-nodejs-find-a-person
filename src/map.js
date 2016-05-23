
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
  var toReturn = [];
  for (i = 0; i<this._posts.length; i++) {
  	if (this._posts[i].search(name) != -1)
  		toReturn.push(this._posts[i])
  }
  return toReturn;
};

Map.prototype.name_matches = function(name) {
	for (i = 0; i<this._posts.length; i++) {
		if (this._posts[i].search(name) != -1)
			return true;	
	}
	return false;
};

Map.prototype.map_inconsist = function(name) {
	var counter = 0;
	var lngth = this._posts.length;
	for (i=0; i<lngth; i++) {
		if (this._posts[i].search(name) != -1)
			counter++;
		if (counter > 1)
			return true;
	}
	return false;
};
module.exports = Map;
