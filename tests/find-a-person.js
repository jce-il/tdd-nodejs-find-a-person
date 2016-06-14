var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Map = require('./../src/map');

describe('Find a person', function() 
{
    it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function() 
    {
        var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
        var posts = map.find_a_person("Or A.")
        expect(posts).to.be.eql(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"]);
    });
    
    
    it('return true if the input is a the input is a place that is in 2 diffrent places, but has the same name)', function() {
    var map = new Map([true,false]);
    var posts = map.find_a_person_3("nepal map")
    expect(posts).to.be.eql(true);
  });
    
    
     it('power number)', function() {
    var map = new Map([2,3,4,8,16]);
    var posts = map.powNum(8)
    expect(posts).to.be.eql(64);
  });
    
    
     it('Given a number, return the power of it', function() 
    {
        var map = new Map([2,16,4,7]);
        var posts = map.powNum(2)
        expect(posts).to.be.eql(4);
    });
    
    
    it('Given 2 numbers, return the sum of them', function() 
    {
        var map = new Map([1,2,3,4,5,6,7,8,9]);
        var posts = map.sum(2,2)
        expect(posts).to.be.eql(4);
    });
    
    
    it('Given a number, return the number Plus 50', function() 
    {
        var map = new Map([51,52,53,54,55,56,57,58,59]);
        var posts = map.numPlus50(3)
        expect(posts).to.be.eql(53);
    });
    
    
    it('Given 2 numbers, return the sub of them', function() 
    {
        var map = new Map([0,1,2,3,4,5,6,7,8,9]);
        var posts = map.minus(3,2)
        expect(posts).to.be.eql(1);
    });
    
    
    it('Given a numbers, return the number division In 2', function() 
    {
        var map = new Map([0,1,2,3,4,5,6,7,8,9]);
        var posts = map.divisionIn2(16)
        expect(posts).to.be.eql(8);
    });
    
    
    it('Given a numbers, return the number minus 1', function() 
    {
        var map = new Map([0,1,2,3,4,5,6,7,8,9]);
        var posts = map.numberMinus1(6)
        expect(posts).to.be.eql(5);
    });

});
