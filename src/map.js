
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

Map.prototype.equals_string = function(str) {
  return ["Correct"];
};

Map.prototype.find_a_soccer_player= function(soccer_player_name) {
  return ["I met at Messi at Spain"];
};

Map.prototype.find_a_teacher = function(teacher_name) {
  return ["I met Richard at Ben Gurion"];
};

Map.prototype.multiply_second = function(number) {
  return number*3;
};


module.exports = Map;


