// Nir Ben Amram 200679546
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
    var posts = [];
    for(var i =0; i<this._posts.length; i++)
        if(this._posts[i].search(name) > -1)
            posts.push(this._posts[i]);
    return posts;    
};

module.exports = Map;