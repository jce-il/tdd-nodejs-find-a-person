var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Map = require('./../src/map');

describe('Find a person', function() {
  it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var posts = map.find_a_person("Or A.")
    expect(posts).to.be.eql(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"]);
  });
    
     it('power number)', function() {
    var map = new Map([2,3,4,8,16]);
    var posts = map.powNum(8)
    expect(posts).to.be.eql(64);
  });
    
     it('squaere number)', function() {
    var map = new Map([2,3,4,8,16]);
    var posts = map.sqwNum(4)
    expect(posts).to.be.eql(2);
  });
    
    it('compare strings)', function() {
    var map = new Map([0,-1]);
    var posts = map.compstr('hello','hello')
    expect(posts).to.be.eql(0);
  });
    
    it('add numbers)', function() {
    var map = new Map([1,3,5,8,10,11,13,14]);
    var posts = map.addnum(4,6)
    expect(posts).to.be.eql(10);
  });
    
    it('mult numbers)', function() {
    var map = new Map([1,3,5,8,10,14]);
    var posts = map.multnum(2,7)
    expect(posts).to.be.eql(14);
  });
});
