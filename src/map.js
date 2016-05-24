
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
  return ["I met Or A. at Chabad house Bangkokk", "We found Or A. R.I.P at Langtang valley"];
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


Map.prototype.check_location = function(name) 
{
    for(i=0; i<this._posts.length; i++)
 	{
 		if(this._posts[i].includes(name))
 			return true;
 	}
};


 Map.prototype.map_inconsistencies = function(name) 
 {

  	 	var posts_contain_person_name = [];
 	for(i=0; i<this._posts.length; i++)
 	{
 		if(this._posts[i].includes(name))
 			posts_contain_person_name.push(this._posts[i]);
 	}
 	if(posts_contain_person_name.length > 1)
 		return true;
  };

module.exports = Map;
