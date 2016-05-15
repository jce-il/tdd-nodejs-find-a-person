
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
	
	var arrayLength = maps.length;
	var array[];
	var j = 0;
	for (var i = 0; i < arrayLength; i++) 
	{
		for(var a = 0; a < maps[i].length - 4; a++)
		{
			if(maps[i][a] == 'O' && maps[i][a+1] == 'r' && maps[i][a+2] == ' ' && maps[i][a+3] == 'A')
			{
				array[j] = maps[i];
				j++;
			}
		}
	}
  return array;
  };

module.exports = Map;
