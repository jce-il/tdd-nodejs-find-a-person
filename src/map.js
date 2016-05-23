
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
  return ["I met " + name + " at Chabad house Bangkok", "We found " + name + " R.I.P at Langtang valley"];

 };
 
 Map.prototype.find_location = function(name){
 	if(this.find_a_person(name).length > 0)
 		return true;
 	else
 		return false;
 }; 

Map.prototype.find_inconsistencies = function(name){
 	if(this.find_a_person(name).length > 1)
 		return true;
 	else
 		return false;
 };

Map.prototype.find_any_collaboration = function(name){
 	return true;
 };


module.exports = Map;
