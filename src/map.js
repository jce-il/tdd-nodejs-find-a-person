
function Map(posts) {
  this._posts = posts;
}



Map.prototype.find_a_person = function(name) {


	return this._posts.filter(function(string){return string.indexOf(name) != -1});
  };


Map.prototype.is_there_location = function(name) {

var post = this._posts.filter(function(s){return s.indexOf(name) != -1 && s.indexOf('at ') != -1;});

	return post.length != 0;
  };

module.exports = Map;
