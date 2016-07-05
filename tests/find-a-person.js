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

describe('Find another person', function() {
  it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function() {
    var map = new Map(["I met Lea at Chabad house Bangkok", "We found Lea R.I.P at Langtang valley", "Random post"]);
    var posts = map.find_a_person("Lea")
    expect(posts).to.be.eql(["I met Lea at Chabad house Bangkok", "We found Lea R.I.P at Langtang valley"]);
  });
});

describe('check if person exist with location', function () {
    it('Given a name, check if the map includes a location information for it (a place or geo. location)', function () {
        var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
        var posts = map.find_person_and_location("Or A.")
        expect(posts).to.be.eql(true);
    });
});
describe('check if person exist with location', function () {
    it('Given a name, check if the map includes a location information for it (a place or geo. location)', function () {
        var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
        var posts = map.find_person_and_location("Lea")
        expect(posts).to.be.eql(false);
    });
});
describe('check another person that not exists with location', function () {
    it('Given a name, check if the map includes a location information for it (a place or geo. location)', function () {
        var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
        var posts = map.find_person_and_location("Lea")
        expect(posts).to.be.eql(false);
    });
});

describe('Check if there are map inconsistencies', function () {
    it('Check if there are map inconsistencies, e.g., the same name with different locations', function () {
        var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
        var posts = map.check_map_inconsistencies()
        expect(posts).to.be.eql(true);
    });
});
describe('Check if there are map inconsistencies with another person', function () {
    it('Check if there are map inconsistencies, e.g., the same name with different locations', function () {
        var map = new Map(["I met Lea at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
        var posts = map.check_map_inconsistencies()
        expect(posts).to.be.eql(false);
    });
});

