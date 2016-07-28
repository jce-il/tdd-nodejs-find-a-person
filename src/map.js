//Netanel Amiel 303136972

function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {

  var posts = [];
  for (var i=0; i<this._posts.length; i++)
    if (this._posts[i].search(name) >= 0)
      posts.push(this._posts[i]);
      return posts;
  };

Map.prototype.find_a_location = function(name) {
  for (var i=0; i<this._posts.length; i++)
    if (this._posts[i].search(name) >= 0)
        return true;
    return false;

  return false;
};

Map.prototype.isInconsistencies = function(name) {
  var posts = this.find_a_person(name);

  if (posts.length > 1)
    return true;
  return false;
};

Map.prototype.remove_posts = function(name) {

  return [];
  };

module.exports = Map;
