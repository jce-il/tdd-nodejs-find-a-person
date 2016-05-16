
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
  return ["I met "+ name +" at Chabad house Bangkok", "We found " +name+" R.I.P at Langtang valley"];
  };//Dor-H
Map.prototype.find_by_location = function(name) {
  if(this.find_a_person(name).length>0)
 return true;
 	else 
  return false;
 	
   };
module.exports = Map;
