
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
   
    
        return ["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"];
        
  };
Map.prototype.powNum = function(num) {
   
        return num*num;  
  };

Map.prototype.DecNum = function(num) {
   
        return num-2;  
  };
Map.prototype.findNUM = function(num) {
   
        return num+3;  
  };
module.exports = Map;
