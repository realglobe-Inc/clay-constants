/**
 * Test case for cryptFormat.
 * Runs with mocha.
 */
'use strict'

const CryptFormat = require('../lib/crypt_format.js')
const assert = require('assert')
const co = require('co')

describe('crypt-format', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Crypt format', () => co(function * () {
    for (let name of Object.keys(CryptFormat)) {
      assert.ok(CryptFormat[ name ])
    }
  }))
})

/* global describe, before, after, it */
