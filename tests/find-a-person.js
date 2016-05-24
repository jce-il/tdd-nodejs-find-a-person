var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Map = require('./../src/map');

describe('Find a person', function() {
  it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var posts = map.find_a_person("Or A.")
    expect(posts).to.be.eql(["I met Or A. at Chabad house Bangkokk", "We found Or A. R.I.P at Langtang valley"]);
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
       var map=new Map([10,11,12]);
       var res=map.add(5,6);
       expect(res).to.be.eql(11);
       
       });        
});


//Test num 5 : Determine if a number is a power of 2

describe('Determine if a number is a power of 2',function(){
    it('Given a number,check if he is power of 2',function(){
       var map=new Map([true,false]);
       var res=map.checkPowerOf2(8);
       expect(res).to.be.eql(true);
       
       });        
});


//Test num 6 : Division of 2 numbers

describe('A division of 2',function(){
    it('Given a 2 numbers,return the division of the 2 numbers',function(){
       var map=new Map([1,2,3]);
       var res=map.div(9,3);
       expect(res).to.be.eql(3);
       
       });        
});

//Test num 7 : avg of 3 numbers

describe('A average of 3 numbers',function(){
    it('Given a 3 numbers,return the avg of the 3 numbers',function(){
       var map=new Map([66,85,70]);
       var res=map.avg(100,50,60);
       expect(res).to.be.eql(70);
       });        
});

//Test num 8 : Find a person

describe('Find a Person',function(){
       it('Given a name, check if the map includes a location information for it (a place or geo. location)',function(){
      	var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
      	var loc = map.find_location("or A.")
      	expect(loc).to.be.eql(true);
      	});
      });     


//Test num 9 : Check the map inconsistencies
/*
describe('A test for map inconsistense',function(){
 it('Check if there are map inconsistencies, e.g., the same name with different locations',function(){
 		var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
  		var inc = map.find_inconsistencies("or A.")
  		expect(inc).to.be.eql(true);
  	})
});*/
