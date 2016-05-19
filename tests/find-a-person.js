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

describe('Find a person - check another', function () {
    it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function () {
        var map = new Map(["I met Miri at Chabad house Bangkok", "We found Miri R.I.P at Langtang valley", "Random post"]);
        var posts = map.find_a_person("Miri")
        expect(posts).to.be.eql(["I met Miri at Chabad house Bangkok", "We found Miri R.I.P at Langtang valley"]);
    });
});

describe('Find a person - check an empty', function () {
    it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function () {
        var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
        var posts = map.find_a_person("Miri")
        expect(posts).to.be.eql([]);
    });
});

describe('Is Exists a person and location', function () {
    it('Given a name, check if the map includes a location information for it (a place or geo. location)', function () {
        var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
        var posts = map.find_a_person_and_location("Or A.")
        expect(posts).to.be.eql(true);
    });
});

describe('Is Exists another person and location', function () {
    it('Given a name, check if the map includes a location information for it (a place or geo. location)', function () {
        var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Miri R.I.P", "Random post"]);
        var posts = map.find_a_person_and_location("Miri")
        expect(posts).to.be.eql(false);
    });
});
