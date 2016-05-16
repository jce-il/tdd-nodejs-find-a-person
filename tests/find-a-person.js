var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Map = require('./../src/map');

describe('Find a person', function() {
  it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var posts = map.find_a_person("Or A.")
    expect(posts).to.be.eql(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"]);
  });
});

describe('Find a person not exists', function() {
  it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var posts = map.find_a_person("Or B.")
    expect(posts).to.be.empty;
  });
});

describe('Find a person in location return true', function() {
  it('Given a name, check if the map includes a location information for it (a place or geo. location)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var res = map.check_if_person_in_location("Or A.")
    expect(res).to.be.true;
  });
});

describe('Find a person in location return true 2', function() {
  it('Given a name, check if the map includes a location information for it (a place or geo. location)', function() {
    var map = new Map(["I met Or A. at Chabad house Nepal", "We found Or A. R.I.P at Langtang", "Random post"]);
    var res = map.check_if_person_in_location("Or A.")
    expect(res).to.be.true;
  });
});

describe('Find a person in location return false', function() {
  it('Given a name, check if the map includes a location information for it (a place or geo. location)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var res = map.check_if_person_in_location("Random")
    expect(res).to.be.false;
  });
});

describe('Check map inconsistencies return true', function() {
  it('Check if there are map inconsistencies, e.g., the same name with different locations', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var res = map.check_map_inconsistencies()
    expect(res).to.be.true;
  });
});

describe('Check map inconsistencies return true 2', function() {
  it('Check if there are map inconsistencies, e.g., the same name with different locations', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Holand", "Random post"]);
    var res = map.check_map_inconsistencies()
    expect(res).to.be.true;
  });
});

describe('Check map inconsistencies return false', function() {
  it('Check if there are map inconsistencies, e.g., the same name with different locations', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or B. R.I.P at Langtang valley", "Random post"]);
    var res = map.check_map_inconsistencies()
    expect(res).to.be.false;
  });
});

