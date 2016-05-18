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