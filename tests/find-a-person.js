var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Map = require('./../src/map');

describe('Find a person', function() {
  it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var posts = map.find_a_person("Or A.")
    expect(posts).to.be.eql(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"]);
  });
});

describe('A multiply of 2',function(){
    it('Given a some number,return the multiply to 2',function(){
       var mul=new Map([6,7,8]);
       var res=mul.multiply(4);
       expect(res).to.be.eql(8);
       
       });        
});

describe('A division of 2',function(){
    it('Given a some number,return the division to 2',function(){
       var mul=new Map([6,7,8]);
       var res=mul.division(14);
       expect(res).to.be.eql(7);
       
       });        
});

describe('A addition of 5',function(){
    it('Given a some number,return the addition to 5',function(){
       var mul=new Map([20,21,22]);
       var res=mul.addition(15);
       expect(res).to.be.eql(20);
       
       });        
});

describe('A sub of 7',function(){
    it('Given a some number,return the sub to 7',function(){
       var mul=new Map([20,21,22]);
       var res=mul.sub(28);
       expect(res).to.be.eql(21);
       
       });        
});

describe('A power of 2',function(){
    it('Given a some number,return the power to 2',function(){
       var mul=new Map([35,36,37]);
       var res=mul.pow(6);
       expect(res).to.be.eql(36);
       
       });        
});

describe('Japanese car',function(){
    it('Given a japanese, return all the cars from japan',function(){
       var mul=new Map(["Honda", "Citroen", "Peugeot", "Toyota"]);
       var res=mul.carFrom("Japan");
       expect(res).to.be.eql(["Honda", "Toyota"]);
       
       });        
});

describe('Map location',function(){
    it('Given a name, return true if the map includes the location',function(){
       var mul=new Map([true, false]);
       var res=mul.mapLoc("Or A.");
       expect(res).to.be.eql(true);
       
       });        
});

describe('map inconsistencies',function(){
    it('Given a location, return true if there are map inconsistencies',function(){
       var mul=new Map([true, false]);
       var res=mul.mapInconsistencies(mul ,"nepal map");
       expect(res).to.be.eql(true);
       
       });        
});