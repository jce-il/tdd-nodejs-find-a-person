//ori halyo
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
    var posts=[];
    for(var i=0; i<this._posts.length; i++)
        if(this._posts[i].search(name) >=0)
            posts.push(this._posts[i]);
            
  return posts;
 };

Map.prototype.find_loc = function(name) {
   
    var loc=[];
    for(var i=0; i<this._posts.length; i++)
        if(this._posts[i].search(name) >=0)
            return true;
    return false;
  };

Map.prototype.isInc= function(name) {
    var posts = this.find_a_person(name);
    if(posts.length>1)
        return true;
    
    return false;
  };



module.exports = Map;


