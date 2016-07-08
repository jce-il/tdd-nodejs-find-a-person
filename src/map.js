var locations = ["Israel", "Bangkok", "Langtang valley"];
 function Map(posts) {
   this._posts = posts;
  }
  
  Map.prototype.find_a_person = function(name) {

 	var array = [];
 	this._posts.forEach(function(value){
 		if (value.indexOf(name) > -1)
   			array.push(value);
 	}); 
 	return array;
    };
  
    Map.prototype.check_if_person_in_location = function(name) {
 
	var res = false;	
 	this._posts.forEach(function(value) {
 		if (value.indexOf(name) > -1 ) {	
 			locations.forEach(function(location) {
 				if (value.indexOf(location) > -1)
 					res = true;	
 			});
			res =  res || (value.indexOf(" at ") > -1)
 		}
   		
 	}); 	
 	return res;
 
   };
 
  module.exports = Map;