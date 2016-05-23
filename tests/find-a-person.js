var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Map = require('./../src/map');

describe('Find a person', function() {
  it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var posts = map.find_a_person("Or A.")
    expect(posts).to.be.eql(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"]);
     	
  });
it('Given a missing person name, return empty posts list', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var posts = map.find_a_person("Ora")
    expect(posts).to.be.eql([]);
     	
  });
});

describe('Include location', function() {
  it('Given a person name, return true if there is location data about this person and false if not', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var posts = map.include_location("Or A.")
    expect(posts).to.be.eql("true");
     	
  });

});
describe('map inconsistencies', function() {
  it('Check if there are map inconsistencies', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var posts = map.map_inconsistencies("posts")
    expect(posts).to.be.eql(true);
     	
  });

});
