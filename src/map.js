
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


module.exports = Map;
