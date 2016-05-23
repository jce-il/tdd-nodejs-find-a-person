// Lior Sapir Software Engineering student.
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
  return ["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"];
  };

Map.prototype.find_a_location = function(name) {
      return false;
  };
module.exports = Map;
