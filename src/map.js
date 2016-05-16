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
	var cmap = new Map(this._posts);
	var person_locations = cmap.find_a_person(name);

	//go over person posts and check if at least one of them is with location
	person_locations.forEach(function(value) {
			locations.forEach(function(location) {
				if (value.indexOf(location) > -1)
					res = true;	
			});
			res =  res || (value.indexOf(" at ") > -1)
  		
	}); 	
	return res;
  };

  
Map.prototype.check_map_inconsistencies = function() {
	var res = false;	
	var cmap = new Map(this._posts);
	//go over all the possible names
	names.forEach(function(name) {
		var array = [];	
		
		//for each name find all its locations
		var person_locations = cmap.find_a_person(name);

		//add the locations for specific name to an array
		person_locations.forEach(function(value) {
			var flag = false;
			locations.forEach(function(location) {
				if (value.indexOf(location) > -1) {
					array.push(location);	
					flag = true;
				}
			});
			if (!flag) {
				if (value.indexOf("at ") > -1) {
					array.push(value.substr(value.indexOf("at ") + 3));
				}
			}
		});

		//check if in the array of locations of specific name there is duplication 
		if (array.length > 1) {
			for (var i = 0; i < array.length; i++) {
				for (var j = 0; j < array.length; j++) {
					if (i != j && array[i] != array[j])
						res = true;
				}
			}
		}	
	});
	return res;
  };
  
module.exports = Map;
