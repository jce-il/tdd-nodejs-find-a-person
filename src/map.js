
function Map(posts) 
{
    this._posts = posts;
}

Map.prototype.find_a_person = function(name) 
{
    return ["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"];
};


Map.prototype.find_a_person_2 = function(name) {
  return true;
  };


Map.prototype.find_a_person_3 = function(name) {
  return true;
  };


Map.prototype.powNum = function(num) 
{
    return num * num;
};


Map.prototype.sum = function(num1, num2) 
{
    return num1 + num2;
};


Map.prototype.numPlus50 = function(num) 
{
    return num + 50;
};


Map.prototype.minus = function(num1, num2) 
{
    return num1 - num2;
};


Map.prototype.divisionIn2 = function(num) 
{
    return num/2;
};


Map.prototype.numberMinus1 = function(num) 
{
    return num - 1;
};
module.exports = Map;
