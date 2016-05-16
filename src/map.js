var locations = ["Israel", "Bangkok", "Langtang valley"];
var names = ["Or A.", "Or B.", "blabla"];

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

  
Map.prototype.check_map_inconsistencies = function() {
	var res = false;	
	
	var cmap = new Map(this._posts);
	names.forEach(function(name) {
		var array = [];	
		
		var person_locations = cmap.find_a_person(name);

		person_locations.forEach(function(value) {
			locations.forEach(function(location) {
				if (value.indexOf(location) > -1)
					array.push(location);	
			});
		});

		if (array.length > 1) {
			var loc = array[0];
			for (var i = 1; i < array.length; i++) {
				if (loc != array[i])
					res = true;
			}
		}	
	});
	return res;
  };
  
module.exports = Map;
