var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Map = require('./../src/map');

//Test num 1 : find a person

describe('Find a person', function() {
  it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var posts = map.find_a_person("Or A.")
    expect(posts).to.be.eql(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"]);
  });
});

//Test num 2 : mult of 2

describe('A multiply of 2',function(){
    it('Given a some number,return the multiply to 2',function(){
       var mul=new Map([6,7,8]);
       var res=mul.multiply(4);
       expect(res).to.be.eql(8);
       
       });        
});

//Test num 3 : find a car

describe('Find a car', function() {
  it('Given a car name, return all posts (of a map) containing her name (in any of a post fields)', function() {
    var map = new Map(["I buy a new Honda car", "Honda is the best family car that exists", "Random post"]);
    var posts = map.find_a_car("Honda")
    expect(posts).to.be.eql(["I buy a new Honda car", "Honda is the best family car that exists"]);
  });
});


//Test num 4 : addition of 2

describe('A addition of 2',function(){
    it('Given a 2 numbers,return the addition of the 2 numbers',function(){
       var additon=new Map([10,11,12]);
       var res=additon.add(5,6);
       expect(res).to.be.eql(11);
       
       });        
});
