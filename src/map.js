
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
  return ["I met " + name + " at Chabad house Bangkok", "We found " + name + " R.I.P at Langtang valley"];

  };

module.exports = Map;
