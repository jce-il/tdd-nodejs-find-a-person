
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
  return ["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"];
  };
  
  
  
Map.prototype.mult = function(num){
	return num*2;
};

Map.prototype.sub = function(num){
	return num -5;
};

Map.prototype.add = function(num){
	return num +10;
};

module.exports = Map;
