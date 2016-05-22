//ori halyo
var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Map = require('./../src/map');

describe('Find a person', function() {
  it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var posts = map.find_a_person("Or A.")
    expect(posts).to.be.eql(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"]);
});
    
  it('Given a name, check if the map includes a location information for it (a place or geo. location)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var loc = map.find_loc("Or A.")
    expect(loc).to.be.eql(true);
  });
    
 it('Given a person name, checking if there is inconsistence by the location of the person', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var inc = map.isInc("Or A.")
    expect(inc).to.be.eql(true);
  });
    
    
  it('checking if there is incosistence with a person, remove all the problematic posts', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var posts = map.revomeInc("Or A.")
    expect(posts).to.be.eql(["Random post"]);
  });
    
    
    
    
    
    
    
});


