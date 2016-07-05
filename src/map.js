
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
    var result = new Array();
    this._posts.forEach(function (item) {
        if (item.indexOf(name) > 0)
            result.push(item);
    });
    return result;
  };

module.exports = Map;
