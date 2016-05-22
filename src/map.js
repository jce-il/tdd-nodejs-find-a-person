function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(person) {
    var posts = [];
    for(var i =0; i<this._posts.length; i++)
        if(this._posts[i].search(person) >= 0)
            posts.push(this._posts[i]);
    return posts;    
};

Map.prototype.find_a_location = function(person) {
    for(var i =0; i<this._posts.length; i++)
        if(this._posts[i].search(person) >= 0)
            return true;
    return false;
};

Map.prototype.isInconsistencies = function(person) {
    if(this.find_a_person(person).length >= 2)
        return true;
    return false;
};

Map.prototype.remove_a_posts_by_name = function(person) {
    var posts = [];
    for(var i =0; i<this._posts.length; i++)
        if(this._posts[i].search(person) < 0)
            posts.push(this._posts[i]);
    this._posts = posts;
    return posts; 
};

module.exports = Map;