function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_by_loc = function(name) {
	if(this.find_a_person(name).length>0){
		return true;
	}
	return false;
};
Map.prototype.find_a_person = function(name) {
	var ret_val =[]; 
	var i=0;
	for(i=0;i<this._posts.length;i++){
		var n = this._posts[i].search(name);
		if(n!=-1){
			ret_val.push(this._posts[i]);
		}
	}
	return ret_val;
};

module.exports = Map;
