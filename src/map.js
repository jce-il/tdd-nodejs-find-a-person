
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name)
{
    var posts = [];
    for(var i =0; i<this._posts.length; i++)
        if(this._posts[i].search(name) >= 0)
 			posts.push(this._posts[i]);	
 	return posts;
};

Map.prototype.find_a_location = function(name) { 
     for(var i =0; i<this._posts.length; i++)
       if(this._posts[i].search(name) >= 0)
           return true;
 return false;
 };

Map.prototype.find_inconsistencies = function(name)
{
	if(this.find_a_person(name).length > 1)
		return false;
	else
		return true;
};

Map.prototype.is_name_show_by_post = function(name) {
 for(var i =0; i<this._posts.length; i++)
 	if(this._posts[i].search(name) < 0)
 			return true;
 		return false; 
 	}
 
Map.prototype.find_any_collaboration = function(name){
    return true;
 };



module.exports = Map;
