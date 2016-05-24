
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
	var ret_array =[]; 
	
	for(var i=0;i<this._posts.length;i++){
		
		if(this._posts[i].search(name) !=-1){
			ret_array.push(this._posts[i]);
		}
	}
	return ret_array;
};
  
Map.prototype.find_by_location = function(name) {
  return true;
  };

  
Map.prototype.find_inconsistencies = function(name){
  	return true;
};

Map.prototype.find_any_collaboration = function(name){
   	return true;
};

module.exports = Map;


