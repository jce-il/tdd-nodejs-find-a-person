//ofir nagadi
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
    var post=[];
    for(var i=0; i< this._posts.length; i++)
    {
        if(this._posts[i].search(name) >= 0)
           post.push(this._posts[i]);
    }
    return post;
};

Map.prototype.find_a_location = function(name) {
    var post=[];
    for(var i=0; i< this._posts.length; i++)
    {
        if(this._posts[i].search(name) >= 0)
           return true;
    }
    return false;
};
      

module.exports = Map;
