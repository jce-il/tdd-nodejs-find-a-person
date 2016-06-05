
function Map(posts) {
  this._posts = posts;
}



Map.prototype.find_a_person = function(name) {
var arr=[];
var  j=0;
for(var i=0;i<this._posts.length;i++)
	if(this._posts[i].indexOf(name)!=-1)
		arr[j++]=this._posts[i];



  return arr;


  };
/*Map.prototype.find_a_person_by_location = function(name) {

for(var i=0;i<this._posts.length;i++)
	if(this._posts[i].indexOf(name)!=-1&& (  this._posts[i].indexOf("at")||this._posts[i].indexOf("in") )  )//key words of locations
		  return true;
return false;


  };*/

Map.prototype.find_a_person_by_different_locations= function(name) {


return false;


  };


module.exports = Map;
