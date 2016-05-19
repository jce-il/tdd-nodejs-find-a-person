// @Author: Miri Yakobi  - 021993035
// @Date: 19/05/2016
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function (name) {
    //this function is search the input name in the existing posts.
    var arr = new Array();
    this._posts.forEach(function (item) {
        if (item.indexOf(name) > 0)
            arr.push(item);
    });
    return arr;
  };

module.exports = Map;
