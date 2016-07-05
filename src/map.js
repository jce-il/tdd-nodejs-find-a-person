
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
//find if a name exists in a specific location on post
Map.prototype.find_person_and_location = function(name) {
	var flag = false;
	this._posts.forEach(function (item) {
        if (item.indexOf(name) > 0 && item.indexOf(" at ") > 0)
            flag = true;
    });
	return flag;
};
module.exports = Map;
