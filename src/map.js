
function Map(posts) {
  this._posts = posts;
}
//find if a name exists on post
Map.prototype.find_a_person = function(name) {
	
    var result = new Array();
    this._posts.forEach(function (item) {
        if (item.indexOf(name) > 0)
            result.push(item);
    });
    return result;
};

Map.prototype.find_person_and_location = function(name) {

	posts.forEach(function (item) {
        if (item.indexOf(name) > 0 && item.indexOf(" at ") > 0)
            return true;
    });
	return false;
};
module.exports = Map;
