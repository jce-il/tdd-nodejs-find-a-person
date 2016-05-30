
function Map(posts) {
  this._posts = posts;
}



Map.prototype.find_a_person = function(name) {


	return this._posts.filter(function(string){return string.indexOf(name) != -1});
  };


Map.prototype.is_there_location = function(name) {


	return true;
  };

module.exports = Map;
