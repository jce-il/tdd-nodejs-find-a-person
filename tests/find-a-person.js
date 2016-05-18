var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Map = require('./../src/map');

describe('Find a person', function() {
    
  it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var posts = map.find_a_person("Or A.")
    expect(posts).to.be.eql(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"]);
  });
    
    it('paw number', function() {
    var map = new Map([3,5,7,16]);
    var posts = map.pawNum(3)
    expect(posts).to.be.eql(9);
  });
    
  it(' Given a name, check if the map includes a location information for it (a place or geo. location)', function() {
    var map = new Map(["Kathmandu- Or A.", "Pokhara-Harry P.", "Lalitpur-Hermione G." ,"Birganj-Ron W.","Butwal-Or A."]);
    var locations = map.find_a_person_location("Or A.")
    expect(locations).to.be.eql([true]);
  });
    
    it(' Check if there are map inconsistencies, e.g., the same name with different locations', function() {
    var map = new Map(["Kathmandu- Or A.", "Pokhara-Harry P.", "Lalitpur-Hermione G." ,"Birganj-Ron W.","Butwal-Or A."]);
    var locations = map.find_a_person_location_returns("Or A.")
    expect(locations).to.be.eql([true]);
  });
    
    
});
