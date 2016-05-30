// @Author: Miri Yakobi  - 021993035
// @Date: 19/05/2016

var allNames = ["Or A.", "Miri", "Ruth"];
var get_person_location_count = function (posts,name) {
    var count = 0;
    posts.forEach(function (item) {
        if (item.indexOf(name) > 0 && item.indexOf(" at ") > 0)
            count++;
    });
    return count;
}
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

Map.prototype.is_exists_person_and_location = function (name) {
    //this function return is there is location for the input name in the existing posts.
    var flag = false;
    if (get_person_location_count(this._posts,name) > 0)
        return true;
    return false;
};

Map.prototype.is_exists_map_inconsistencies = function () {
    var flag = false;
    var that = this;
    allNames.forEach(function (name) {
        if (get_person_location_count(that._posts, name) > 1)
            flag = true;
    });
    return flag;
};

module.exports = Map;
