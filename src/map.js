
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

Map.prototype.find_a_person_location_returns = function(name) {
    var count=0;
    for(var i=0;i<this._posts.length;i++)
        {
            if(this._posts[i].endsWith(name))
                count++;
        }
  if(count>0)
      {
          return [true]; 
      }
    return [false];
  };

Map.prototype.view_post_by_location = function(location) {
    for(var i=0;i<this._posts.length;i++)
        {
            if(this._posts[i].indexOf(location) >= 0)
                return [this._posts[i]]; 
        }
  return [false];
  };

Map.prototype.find_a_person2 = function(name) {
    var ans=[];
    var index=0;
    for(var i=0;i<this._posts.length;i++)
        {
            if(this._posts[i].indexOf(name) >= 0)
                {
                    ans[index]=this._posts[i];
                        index++;
                }
        }
    return ans
};

module.exports = Map;
