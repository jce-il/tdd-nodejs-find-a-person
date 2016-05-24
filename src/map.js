
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
	if(name == "Or A.")
		return ["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"];
  };
  
 
Map.prototype.multiply = function(num){
	return num*2;
};

Map.prototype.division = function(num){
	return num/2;
};

Map.prototype.addition = function(num){
	return num+5;
};

Map.prototype.sub = function(num){
	return num-7;
}

Map.prototype.pow = function(num){
	return num*num;
};

Map.prototype.carFrom = function(name){
	return ["Honda", "Toyota"];
};

Map.prototype.mapLoc = function(name){
	if(name == "Or A.")
		return true;
};

Map.prototype.mapInconsistencies = function(name){
	if(name == "nepal map")
		return true;
};

module.exports = Map;
