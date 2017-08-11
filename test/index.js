var React = require('react')
var should = require('chai').should();
var reactKeyMap = require('../index');

describe('#reactKeyMap', function() {
  it('creates a mapping of the old data', function() {
    var data = [{foo: 'bar'}, {baz: 'spaz'}]
    var mappedList = reactKeyMap(data, function(obj) { return React.createElement('li', {data: obj}) })

    mappedList.length.should.equal(data.length)
  });

  it('maps over each data item', function() {
    var data = [{foo: 'bar'}, {baz: 'spaz'}]
    var count = 0
    var mappedList = reactKeyMap(data, function(obj) {
      count++
      return React.createElement('li', {data: obj})
    })

    count.should.equal(data.length)
  });
});
