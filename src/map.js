
function Map(posts) {
  this._posts = posts;
}

// find_a_person
Map.prototype.find_a_person = function(name) {
  return ["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"];
};

// find_by_loc
Map.prototype.find_by_loc = function(name) {
    if(this.find_a_person(name).length>0)
		return true;
	return false;
};

// is_inconsistencies
Map.prototype.is_inconsistencies = function(name) {
    if(this.find_a_person(name).length>1)
		return true;
	return false;
};

module.exports = Map;
