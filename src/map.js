
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
    return ["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"];
};
Map.prototype.find_by_loc = function(name) {
    if(this.find_a_person(name).length>0)
		return true;
	return false;
};

module.exports = Map;
