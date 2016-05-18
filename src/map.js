
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
  return ["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"];
  };
  
 
Map.prototype.multiply = function(num){
	return num*2;
}

Map.prototype.division = function(num){
	return num/2;
}

module.exports = Map;
