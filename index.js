var React = require('react')
var HashAlgorithms = require('./hash')

var reactKeyMap = function(data, fn) {
  let len = data.length
  let results = []

  for(let i = 0; i < len; i++) {
    let hash = HashAlgorithms.fnv32(JSON.stringify(data[i]))
    results[i] = React.cloneElement(
      fn(data[i]),
      {key: hash},
      null
    )
  }
  return results
}

module.exports = reactKeyMap
