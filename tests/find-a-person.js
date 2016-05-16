var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Map = require('./../src/map');

describe('Find a person', function() {
  it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post", "Or in Jerusalem"]);
    var posts = map.find_a_person("Or A.")
    expect(posts).to.be.eql(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"]);
  });
});

describe('Find a person with shorter name', function() {
  it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post", "Or in Jerusalem"]);
    var posts = map.find_a_person("Or")
    expect(posts).to.be.eql(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Or in Jerusalem"]);
  });
});

describe('Find a person that does not exist', function() {
  it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post", "Or in Jerusalem"]);
    var posts = map.find_a_person("AAA")
    expect(posts).to.be.eql([]);
  });
});


describe('Find a person with location', function() {
  it('Given a name, check if the map includes a location information for it (a place or geo. location)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post", "Or in Jerusalem"]);
    var posts = map.find_a_person_with_location("Or A.")
    expect(posts).to.be.eql(true);
  });
});

describe('Find a person without location', function() {
  it('Given a name, check if the map includes a location information for it (a place or geo. location)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post", "Or in Jerusalem"]);
    var posts = map.find_a_person_with_location("Or ABC.")
    expect(posts).to.be.eql(false);
  });
});

describe('Check map inconsistencies: a person with different locations', function() {
  it('Check if there are map inconsistencies, e.g., the same name with different locations', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post", "Or in Jerusalem"]);
    var posts = map.check_inconsistencies()
    expect(posts).to.be.eql(true);
  });
});