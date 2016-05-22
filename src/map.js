function Map(posts) {
    this._posts = posts;
}

Map.prototype.find_a_person = function (name) {
    return ["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"];
};

Map.prototype.get_location_info = function (name) {
    var a = false;
    return a;
};

module.exports = Map;
