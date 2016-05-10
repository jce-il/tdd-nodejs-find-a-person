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
    var map = new Map(["I met Tony at Chabad house Israel"]);
    var posts = map.find_a_pet("Tony");
    expect(posts).to.be.eql("Messi");
  });
});
