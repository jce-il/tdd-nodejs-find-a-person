
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
  return ["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"];
  };


Map.prototype.powNum = function(num) {
  return num*num;
  };

Map.prototype.sqwNum = function(num) {
  return Math.sqrt(num);
  };
Map.prototype.compstr = function(str1,str2) {
  return str1.localeCompare(str2);
  };


module.exports = Map;
