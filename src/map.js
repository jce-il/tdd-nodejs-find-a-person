
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
  return ["I met " + name +  " at Chabad house Bangkok", "We found " + name + " R.I.P at Langtang valley"];
};
  
Map.prototype.find_by_location = function(name) {
	if(this.find_a_person(name).length>0)
		return true;
	else 
		return false;	
};

Map.prototype.check_inconsistencies_map = function(name) {
	var i;
	var flag = false;
	
	for(i = 0; i < this._posts.length; i++){
		if (this._posts[i].search(name) >= 0){
			if (flag)
				return true;
			else
				flag = true;
		}
	}
	
	return false;
}

Map.prototype.check_if_person_visit_location = function(name, location) {
	var i;
	
	for(i = 0; i < this._posts.length; i++){
		if (this._posts[i].search(name) >= 0 && this._posts[i].search(location) >= 0){
				return true;
		}
	}
	
	return false;
}

module.exports = Map;
