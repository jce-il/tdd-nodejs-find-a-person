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

Map.prototype.is_exists_person_and_location = function (name) {
    //this function return is there is location for the input name in the existing posts.
    var flag = false;
    this._posts.forEach(function (item) {
        if (item.indexOf(name) > 0 && item.indexOf(" at ") > 0)
            flag = true;
    });
    return flag;
};


module.exports = Map;
