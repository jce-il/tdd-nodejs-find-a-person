var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Map = require('./../src/map');

var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
describe('Find a person', function() {
    it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function() {
    
    var posts = map.find_a_person("Or A.")
    expect(posts).to.be.eql(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"]);
  });
});
describe('Name match (bool)', function() {
 	it ('Given a name, check if the map includes a location information', function() {
 		var posts = map.matchesName("Or A.")
 		expect(posts).to.be.eql(true);
 	});
 });
 describe('Map inconsistencies first test', function() {
    it('check if there are map inconsistencies (different location) ', function() {
     var posts = map.map_inconsist("Or A.")
     expect(posts).to.be.eql(true);
   });
 }); 