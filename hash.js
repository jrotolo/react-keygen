// FNV-1 hash paramerters - http://www.isthe.com/chongo/tech/comp/fnv/#FNV-param

// ------------ FNV Primes ------------------ //
// By Bit size (32, 64, 128, 256)
var FNV_PRIME_32 = 0x1000193
var FNV_PRIME_64 = 0x100000001B3
var FNV_PRIME_128 = 0x1000000000000000000013B
var FNV_PRIME_256 = 0x1000000000000000000000000000000000000000163

// ------------ FNV Offset Basis -------------- //
var FNV_OFFSET_32 = 0x811C9DC5
var FNV_OFFSET_64 = 0xCBF29CE484222325
var FNV_OFFSET_128 = 0x6C62272E07BB014262B821756295C58D
var FNV_OFFSET_256 = 0xDD268DBCAAC550362D98C384C4E576CCC8B1536847B6BBB31023B4C8CAEE0535

// ------------ FNV Hash Functions ------------- //
var HashAlgorithms = {
  /**
   * Creates a 32 bit FNV-1 hash from a json string
   *
   * @param {String} data
   * @return {Number} (hash of data)
   */
  fnv32: function(data) {
    var hash = FNV_OFFSET_32;
    for (var i = 0; i < data.length; i++) {
      hash ^= data.charCodeAt(i);
      hash *= FNV_PRIME_32;
    }
    return hash;
  },

  /**
   * Creates a 64 bit FNV-1 hash from a json string
   *
   * @param {String} data
   * @return {Number} (hash of data)
   */
  fnv64: function(data) {
    var hash = FNV_OFFSET_64;
    for (var i = 0; i < data.length; i++) {
      hash ^= data.charCodeAt(i);
      hash *= FNV_PRIME_64;
    }
    return hash;
  },

  /**
   * Creates a 128 bit FNV-1 hash from a json string
   *
   * @param {String} data
   * @return {Number} (hash of data)
   */
  fnv128: function(data) {
    var hash = FNV_OFFSET_128;
    for (var i = 0; i < data.length; i++) {
      hash ^= data.charCodeAt(i);
      hash *= FNV_PRIME_128;
    }
    return hash;
  }
};

module.exports = HashAlgorithms
