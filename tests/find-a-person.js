var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Map = require('./../src/map');

/*describe('Find a person', function() {
  it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var posts = map.find_a_person("Or A.")
    expect(posts).to.be.eql(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"]);
  });
});*/
/*describe('Find a person by location', function() {
  it('Given a person name, return true if there is data about the location o/w false', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post","I saw Or A. in the valley"]);
    var posts = map.find_a_person_by_location("Or A.")
    expect(posts).to.be.eql(true);
  });
});*/
describe('Find a person by different locations', function() {
  it('Given a person name, return true if there are more than one post of data of locations o/w -false', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok"]);
    var posts = map.find_a_person_by_different_locations("Or A.")
    expect(posts).to.be.eql(false);//there is only one post about the location so the test return false
  });
});


