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


describe('Muiltply by 2', function() {
  it('Given a number, returns number multiply 2', function() {
    var map = new Map([10, 12, 14]);
    var posts = map.mult(6)
    expect(posts).to.be.eql(12);
  });
});

describe('Subs by 5', function() {
  it('Given a number, returns number subs 5', function() {
    var map = new Map([8, 13, 20]);
    var posts = map.sub(18)
    expect(posts).to.be.eql(13);
  });
});

describe('Add by 10', function() {
  it('Given a number, returns number plus 10', function() {
    var map = new Map([20, 30, 40]);
    var posts = map.add(10)
    expect(posts).to.be.eql(20);
  });
});

describe('Division by 3', function() {
  it('Given a number, returns number divise 3', function() {
    var map = new Map([6, 8, 10]);
    var posts = map.div(24)
    expect(posts).to.be.eql(8);
  });
});