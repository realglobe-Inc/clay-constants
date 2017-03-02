/**
 * Test case for lumpSpec.
 * Runs with mocha.
 */
'use strict'

const LumpSpec = require('../lib/lump_spec.js')
const { ok } = require('assert')
const co = require('co')

describe('lump-spec', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Lump spec', () => co(function * () {
    let { NAME_PATTERN } = LumpSpec
    ok(NAME_PATTERN.test('example.com/foo'))
  }))
})

/* global describe, before, after, it */
