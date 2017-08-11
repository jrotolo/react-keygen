var React = require('react')
var should = require('chai').should();
var HashAlgorithms = require('../hash');

describe('#fnv32', function() {
  it('generates a number hash', function() {
    var data = JSON.stringify([{foo: 'bar'}, {baz: 'spaz'}])

    HashAlgorithms.fnv32(data).should.be.a('number')
  });

  it('generates a 32 signed bit hash', function() {
    var data = JSON.stringify([{foo: 'bar'}, {baz: 'spaz'}])
    var bitCheck = HashAlgorithms.fnv32(data) >> 31

    bitCheck.should.equal(0)
  });
});

describe('#fnv64', function() {
  it('generates a number hash', function() {
    var data = JSON.stringify([{foo: 'bar'}, {baz: 'spaz'}])

    HashAlgorithms.fnv64(data).should.be.a('number')
  });

  it('generates a 64 signed bit hash', function() {
    var data = JSON.stringify([{foo: 'bar'}, {baz: 'spaz'}, {foobar: 'foob'}])
    var bitCheck = HashAlgorithms.fnv64(data) >> 63

    bitCheck.should.equal(0)
  });
});

describe('#fnv128', function() {
  it('generates a number hash', function() {
    var data = JSON.stringify([{foo: 'bar'}, {baz: 'spaz'}])

    HashAlgorithms.fnv128(data).should.be.a('number')
  });

  it('generates a 128 signed bit hash', function() {
    var data = JSON.stringify([{foo: 'bar'}, {baz: 'spaz'}])
    var bitCheck = HashAlgorithms.fnv128(data) >> 127

    bitCheck.should.equal(0)
  });
});
