
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
	var array = [];
	this._posts.forEach(function(value){
		if (value.indexOf(name) > -1)
  			array.push(value);
	}); 
	return array;
  };

  Map.prototype.check_if_person_in_location = function(name) {
	
	return null;
  };

module.exports = Map;
