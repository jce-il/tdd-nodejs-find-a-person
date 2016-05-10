var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Map = require('./../src/map');

describe('Find a person', function() {
  it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var posts = map.find_a_person("Or A.");
    expect(posts).to.be.eql(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"]);
  });
});


describe('A multiply of 2', function() {
  it('Given a some number, return the multiply to 2', function() {
    var mul = new Map([6,7,8]);
    var result = mul.multiply(4);
    expect(result).to.be.eql(8);
  });
});

describe('Find a pet', function() {
  it('Given a pet name, return all posts (of a map) containing her name', function() {
    var map = new Map(["I met Tony at Chabad house Israel", "I met Tony at Las Vegas"]);
    var posts = map.find_a_pet("Tony");
    expect(posts).to.be.eql(["I met Tony at Chabad house Israel", "I met Tony at Las Vegas"]);
  });
});

describe('Equals strings', function() {
  it('Given a string, return if the string is equals', function() {
    var strings = new Map(["Correct", "Incorrect"]);
    var result = strings.equals_string("The academy");
    expect(result).to.be.eql(["Correct"]);
  });
});

describe('Find a soccer player', function() {
  it('Given a soccer player name, return all posts containing the soccer player name ', function() {
    var map = new Map(["I met at Messi at Israel", "I met at Messi at Spain"]);
    var found = map.find_a_soccer_player("Messi");
    expect(found).to.be.eql(["I met at Messi at Spain"]);
  });
});