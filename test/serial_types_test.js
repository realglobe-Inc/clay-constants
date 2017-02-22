/**
 * Test case for serialTypes.
 * Runs with mocha.
 */
'use strict'

const SerialTypes = require('../lib/serial_types.js')
const assert = require('assert')
const co = require('co')

describe('serial-types', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Serial types', () => co(function * () {
    for (let name of Object.keys(SerialTypes)) {
      assert.ok(SerialTypes[ name ])
    }
  }))
})

/* global describe, before, after, it */
