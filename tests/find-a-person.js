var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Map = require('./../src/map');


describe('Find a person', function () {
    it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function () {
        var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
        var posts = map.find_a_person("Or A.");
        expect(posts).to.be.eql(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"]);
    });
});

describe('Find location info', function () {
    it('Given a name, check if the map includes a location information for it (a place or geo. location)', function () {
        var map = new Map(['a','b'], ['a','Or A']);

        var output = map.get_location_info('Or A');
        expect(output).to.be.eql(true);
    });
});

describe('Find map inconsistencies', function () {
    it('Check if there are map inconsistencies, e.g., the same name with different locations. ', function () {
        var map = new Map(['a','b'], ['a','Or A']);

        var output = map.find_map_inconsistencies('nepal map');
        expect(output).to.be.eql(true);
    });
});
