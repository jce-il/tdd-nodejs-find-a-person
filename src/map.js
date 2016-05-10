
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
	var ret_val [this._posts.length]; 
	var i=0;
	var j=0;
	for(i=0;i<this._posts.length;i++){
		var n = this._posts[i].search(name);
		if(n!=-1){
			ret_val[j]=this._posts[i];
			j++;
		}
	}
	
	
  return ret_val;
  };

module.exports = Map;
