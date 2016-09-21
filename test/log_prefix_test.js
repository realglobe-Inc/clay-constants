/**
 * Test case for logPrefix.
 * Runs with mocha.
 */
'use strict'

const LogPrefix = require('../lib/log_prefix.js')
const assert = require('assert')
const co = require('co')

describe('log-prefix', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Log prefix', () => co(function * () {
    for (let name of Object.keys(LogPrefix)) {
      assert.ok(LogPrefix[ name ])
    }
  }))
})

/* global describe, before, after, it */
