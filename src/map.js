// Lior Sapir Software Engineering student.
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
  return ["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"];
  };

Map.prototype.isInconsistencies = function(name) {
      return false;
  };

Map.prototype.find_a_location = function(name) {
      for(var i =0; i<this._posts.length; i++)
           if(this._posts[i].search(name) >= 0)
                return true;
      return false;
  };
module.exports = Map;
