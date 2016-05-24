
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
   
    
        return ["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"];
        
  };


Map.prototype.find_a_true = function(name) {
        return true;        
  };

Map.prototype.find_a_true2 = function(name) {
        return true ;        
  };



Map.prototype.powNum = function(num) {
   
        return num*num;  
  };

Map.prototype.DecNum = function(num) {
   
        return num-2;  
  };

Map.prototype.findNUM = function(num) {
   
        return num+10;  
  };


Map.prototype.findNeg = function(num) {
   
        return num*-1;  
  };

Map.prototype.findSum = function(num1,num2) {
   
        return num1+num2;  
  };

Map.prototype.findmult = function(num1,num2) {
   
        return num1*num2;  
  };
  
module.exports = Map;
