
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
  var result =[];
  for(i=0;i<this._posts.length;i++){
    if(this._posts[i].search(name)>=0){
      result.push(this._posts[i]);
    }
  }
  return result;
};
module.exports = Map;
