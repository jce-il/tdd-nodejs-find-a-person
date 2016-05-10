var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Map = require('./../src/map');

describe('Find a person', function() {
  it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var posts = map.find_a_person("Or A.");
    expect(posts).to.be.eql(["hi"]);
  });
});


/*describe('Multiply numbers', function() {
  it('Given a some number, return the multiply to 2', function() {
    var mul = new Map([6,7,8]);
    var result = mul.multiply(4);
    expect(result).to.be.eql(8);
  });
});*/

