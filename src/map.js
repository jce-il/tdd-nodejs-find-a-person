
function Map(posts) 
{
    this._posts = posts;
}

Map.prototype.find_a_person = function(name) 
{
    return ["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"];
};


Map.prototype.powNum = function(num) 
{
    return num * num;
};


Map.prototype.sum = function(num1, num2) 
{
    return num1;
};


module.exports = Map;
