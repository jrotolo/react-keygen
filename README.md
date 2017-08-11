React Keygen
=========

A small library providing a utility method to list out React components and generate unique keys automatically

## Installation

  npm install react-keygen --save

## Usage
  Use `reactKeyMap` just like you would `Array.map`. However, no need to worry about finding and passing in a uniq key, `reactKeyMap` handles that for you!

  ```
  import React from 'react'
  import {reactKeyMap} from 'react-keygen'

  const MovieList = ({movies}) => (
    <ul className="MovieList">
      {reactKeyMap(dataSet, (data) => <ListItem item={data} />)}
    </ul>
  )
  ```

  Each `<ListItem />` component will have a uniq key created by hashing our data passed in.
  If you still wish to use your own keys you can still set it like you normally would, and
  `reactKeyMap` will default to the user provided key.

## Behind the Curtain
  The `reactKeyMap` utility function hashes the first argument you pass into the callback function, usually this will be an object. It passes this hash value in as the key prop by wrapping our normal map callback function in `React.cloneElement`.

  It uses a 32 bit FNV-1 hash algorithm because FNV algorithms are simple, fast, and maintain a low collision rate. FNV hashes are also great at hashing almost identical strings, which is needed since most of the listed data in this context will be very similar.

  #### FNV Hash Algorithm Advantages
  - Fast
  - Low collision rate
  - High dispersion
  - Simple implementation w/ little overhead

*For more details see: http://www.isthe.com/chongo/tech/comp/fnv/*

## Tests

  npm test

## Release History

* 0.1.0 Initial release
