
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
  return ["I met "+name +" at Chabad house Bangkok", "We found " + name + " R.I.P at Langtang valley"];
  };

  Map.prototype.find_location = function(name)
  {
	  return true;
  }

  Map.prototype.CheckMapInconsistencies = function(name)
  {
	  return true;
  }  
  Map.prototype.Check_Collaborate = function(name)
  {
	  return true;
  }
module.exports = Map;
