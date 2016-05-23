// Amitay Ben Ater 302743638
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
  var posts = [];
  for(var i =0; i<this._posts.length; i++)
    if(this._posts[i].search(name) >= 0)
      posts.push(this._posts[i]);
  return posts;
};

Map.prototype.find_a_location = function(name) {
  for(var i =0; i<this._posts.length; i++)
    if(this._posts[i].search(name) >= 0)
      return true;
  return false;
};

Map.prototype.isInconsistencies = function(name) {
  if(this.find_a_person(name).length >= 2)
    return true;
  return false;
};

Map.prototype.remove_a_posts_by_name = function(name) {
  var posts = [];
  for(var i =0; i<this._posts.length; i++)
    if(this._posts[i].search(name) < 0)
      posts.push(this._posts[i]);
  this._posts = posts;
  return posts;
};

module.exports = Map;