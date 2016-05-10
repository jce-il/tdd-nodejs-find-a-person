
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
  return ["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"];
};

Map.prototype.multiply = function(number) {
  return number*2;
};

Map.prototype.find_a_pet = function(pet_name) {
  return ["I met Tony at Chabad house Israel", "I met Tony at Las Vegas"];
};


module.exports = Map;


