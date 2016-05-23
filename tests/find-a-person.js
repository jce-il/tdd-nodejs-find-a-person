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

describe('Name match found (bool)', function() {
 	it ('Given a name, check if the map includes a location information for it (a place or geo. location)', function() {
 		var posts = map.name_matches("Or A.")
 		expect(posts).to.be.eql(true);
 	});
 });
 
 describe('Map inconsistencies test #1', function() {
   it('heck if there are map inconsistencies, e.g., the same name with different locations.', function() {
     var posts = map.map_inconsist("Or A.")
     expect(posts).to.be.eql(true);
   });
 });

 describe('Map inconsistencies test #2', function() {
   it('Check if there are map inconsistencies, e.g., the same name with different locations.', function() {
     var posts = map.map_inconsist("Amit B.")
     expect(posts).to.be.eql(false);
   });
 });