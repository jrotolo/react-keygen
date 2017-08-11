var React = require('react')
var HashAlgorithms = require('./hash')

// Maps over the given data to be listed out and automatically creates unique react keys
// Unique react keys are created by hashing the data blob used to render the list item.
// using reactKeyMap can be used instead of Array.map when rendering out children
// DOM elements that would require unique react keys. Never worry about creating and
// setting react keys again.
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
