var React = require('react')
var should = require('chai').should();
var reactKeyMap = require('../index');
var HashAlgorithms = require('../hash');

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

  it('has a valid fnv32 hash key set', function() {
    var data = [{foo: 'bar'}, {baz: 'spaz'}];
    var checkSum = HashAlgorithms.fnv32(JSON.stringify(data[0]));
    var mappedList = reactKeyMap(data, function(obj) {
      return React.createElement('li', {data: obj});
    });

    mappedList[0].key.should.equal(checkSum.toString());
  });

  it('creates a unique hash key', function() {
    var data = [{foo: 'bar'}, {baz: 'spaz'}];
    var mappedList = reactKeyMap(data, function(obj) {
      return React.createElement('li', {data: obj});
    });

    mappedList[0].key.should.not.equal(mappedList[1].key);
  });
});
