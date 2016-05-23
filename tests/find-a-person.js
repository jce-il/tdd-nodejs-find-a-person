//tal garusi
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
    var location = map.find_location("Or A.")
    expect(location).to.be.eql(true);
  });
    it('Check if there are map inconsistencies, e.g., the same name with different locations', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var inconsistencies = map.find_inconsistencies("Or A.")
    expect(inconsistencies).to.be.eql(true);
  });
    it('Given a location name, remove all posts (of a map) containing this location (in any of a post fields)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var posts = map.remove_posts("Bangkok")
    expect(posts).to.be.eql(["We found Or A. R.I.P at Langtang valley", "Random post"]);
  });
});


