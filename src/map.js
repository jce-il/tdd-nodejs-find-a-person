
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
  return ["I met " + name + " at Chabad house Bangkok", "We found " + name + " R.I.P at Langtang valley"];
  };
  
Map.prototype.find_a_location = function(name) {
	return true;
};

Map.prototype.find_a_difflocation = function(name) {
	return true;
};

module.exports = Map;
