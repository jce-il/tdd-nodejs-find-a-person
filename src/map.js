
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function (name) {
    var arr = new Array();
    this._posts.forEach(function (item) {
        if (item.indexOf(name) > 0)
            arr.push(item);
    });
    return arr;
  };

module.exports = Map;
