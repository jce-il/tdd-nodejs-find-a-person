
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name)
{
  return ["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"];
};

Map.prototype.multiply=function(num)
{
    return num*2;
};


Map.prototype.find_a_car = function(name)
{
  return ["I buy a new Honda car", "Honda is the best family car that exists"];
};


Map.prototype.add=function(num1,num2)
{
    return num1+num2;
};


Map.prototype.checkPowerOf2=function(num)
{   
    if(num==0)
        return false;
    
    while(num%2==0)
        num=num/2;
    
    if(num>1)
        return false;
    
    return true;
};

Map.prototype.div=function(num1,num2)
{
    return num1/num2;
};

Map.prototype.avg=function(num1,num2,num3)
{
    return (num1+num2+num3)/3;
};


Map.prototype.find_location = function(name){
  	return true;
  }; 


Map.prototype.find_inconsistencies = function(name){
  	return true;
  };

module.exports = Map;

