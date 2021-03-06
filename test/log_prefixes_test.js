/**
 * Test case for logPrefix.
 * Runs with mocha.
 */
'use strict'

const LogPrefixes = require('../lib/log_prefixes.js')
const { ok } = require('assert')
const co = require('co')

describe('log-prefix', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Log prefix', () => co(function * () {
    for (let name of Object.keys(LogPrefixes)) {
      ok(LogPrefixes[ name ])
      ok(/_PREFIX$/.test(name))
    }
  }))
})

/* global describe, before, after, it */
