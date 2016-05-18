
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
  return ["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"];
  };

Map.prototype.pawNum = function(num) {
  return num*num;
  };

Map.prototype.find_a_person_location = function(name) {
    for(var i=0;i<this._posts.length-1;i++)
        {
            if(this._posts[i].endsWith(name))
                return [true]; 
        }
  return [false];
  };

module.exports = Map;
