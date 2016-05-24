
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
  var result =[];
  for(i=0;i<this._posts.length;i++){
    var n = this._posts[i].search(name);
    if(n!=-1){
      ret_val.push(this._posts[i]);
    }
  }
  return ret_val;
};
module.exports = Map;
