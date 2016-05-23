
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
	function find_substring(string, sub_string){
	if(string.indexOf(name)!=-1)
		return true;
	else
		return false

}
	return this._posts.filter(find_substring);
  
  };
  
Map.prototype.find_a_person_with_location = function(name) {
 if (this._posts[i].indexOf(name) >= 0 && this._posts[i].indexOf(" at ") >= 0)
 			return true;
 
  	return false;
  };  

module.exports = Map;

