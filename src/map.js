
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
	function find_substring(string, sub_string){
	if(string.indexOf(name)!=-1)
		return true;
	else
		return false

}
	return this._posts.filter(find_substring);
  
  };

  Map.prototype.Is_there_location = function(name) {
	
		return true;



  };
  
  
  
  
  /*
 Map.prototype.include_location = function(name) 
{
	var places=["Chabad house Bangkok","Langtang valley"];
	var flag="false";
	for(i=0;i<this._posts.length;i++){
            var n=this._posts[i].indexOf(name);
	    if(n!=-1)
	    {
		for(j=0;j<places.length;j++)
		{
	            var l=this._posts[i].indexOf(places[j]);
		    if(l!=-1)	
			flag="true";	
		}	
	    }
	}
	
	return flag;
  };*/
module.exports = Map;
