

function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {

	var flag="false";
	for(i=0;i<this._posts.length;i++){
            var n=this._posts[i].indexOf(name);
	    if(n!=-1)
		flag="true";		
	}
	if(flag=="true")
 	 return ["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"];
	else
	return [];
  };

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
  };
Map.prototype.map_inconsistencies=function(name) 
{
	var names=["Or A.","Ruth S."];
	var flag="false";
	for(i=0;i<names.length;i++)
	{
	   count=0;
	   for(j=0;j<this._posts.length;j++)
	   {
	  	var n=this._posts[j].indexOf(names[i]);
	        if(n!=-1)
	        {
		   count++;	
		}	
	   }
	   if(count>1)
		return false;
	}
	return false;

  };
module.exports = Map;
