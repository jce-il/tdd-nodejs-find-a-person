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

  
Map.prototype.check_for_location = function(person){
 
 	return true;};
	
	
Map.prototype.isInconsistencies = function(person) {
    if(this.find_a_person(person).length > 1)
        return true;
     return false;
 };
 
Map.prototype.remove_a_posts_by_name = function(person) {
    return false; 
};

 
  
module.exports = Map;