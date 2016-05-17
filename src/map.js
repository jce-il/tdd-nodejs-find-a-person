
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

module.exports = Map;

