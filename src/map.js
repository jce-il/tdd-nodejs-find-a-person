//Adam hudeda 201570793 
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(person) {
  
	var results = [];
 	var i;
 	for(i = 0;i < this._posts.length; i++){
 		if(this._posts[i].indexOf(person) > -1){
 			results.push(this._posts[i]);
 		}
 	}
 	return results;
  };

module.exports = Map;