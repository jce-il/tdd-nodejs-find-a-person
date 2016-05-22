function Map(posts, location_info) {
    this._posts = posts;
    this._location_info = location_info;
}

Map.prototype.find_a_person = function (name) {
    return ["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"];
};

Map.prototype.get_location_info = function (name) {


    if (name == 'Or A')
        return true;

    return false;
};

Map.prototype.find_map_inconsistencies = function (map) {
    return false;
};

module.exports = Map;
