var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Map = require('./../src/map');

describe('Find a person', function() { //green
  it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var posts = map.find_a_person("Or A")
    expect(posts).to.be.eql(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"]);
  });
  
    
    
   
    
 
  it('Given a person name, return true or false', function() {
    var map = new Map([true,false]);
    var posts = map.find_a_true("Or A")
    expect(posts).to.be.eql(true);
  });
    
   it('Given a place, return true or false if the place appears in 2 places ', function() {
    var map = new Map([true,false]);
    var posts = map.find_a_true2("nepal map")
    expect(posts).to.be.eql(true);
  });
    
 
  it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function() {
    var map = new Map([true,false]);
    var posts = map.find_a_true("Or A")
    expect(posts).to.be.eql(true);
  });
  
        
    it('given a number ,return the power of the number', function() {
    var map = new Map([2,3,4,7,8,16]);
    var posts = map.powNum(2)
    expect(posts).to.be.eql(4);
  });
    
   
      it('given a number decrease 2 from it ', function() {
    var map = new Map([2,3,4,7,8,16]);
    var posts = map.DecNum(4)
    expect(posts).to.be.eql(2);
          
  });
 

    it('given a number find the number +10 ', function() {
    var map = new Map([10,20,30,40]);
    var posts = map.findNUM(10)
    expect(posts).to.be.eql(20);
        
  });
    
       it('given a number find its negative  ', function() {
    var map = new Map([-1,-2,-4]);
    var posts = map.findNeg(1)
    expect(posts).to.be.eql(-1);
        
  });
    
    
         it('given 2 numbers ..return the sum between them ', function() {
    var map = new Map([3,6,7,8,6,20,22,9]);
    var posts = map.findSum(6,3)
    expect(posts).to.be.eql(9);
        
  });
    
    
           it('given 2 numbers ..return the devision between them ', function() {
    var map = new Map([3,6,2,7,8,6,20,22,9,18]);
    var posts = map.findmult(6,3)
    expect(posts).to.be.eql(18);
        
  });
 
});
