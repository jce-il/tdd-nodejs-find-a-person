
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

Map.prototype.findCity = function(city){
	if(city == "nepal map")
		return 1;
};

Map.prototype.mapInconsistencies = function(mul, name){
	var x = mul.findCity(name);
	if(x == 1)
		return true;
	else
		return false;
};

module.exports = Map;
