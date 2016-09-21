/**
 * Test case for sheetPrefixes.
 * Runs with mocha.
 */
'use strict'

const SheetPrefixes = require('../lib/sheet_prefixes.js')
const assert = require('assert')
const co = require('co')

describe('sheet-prefixes', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Sheet prefixes', () => co(function * () {
    for (let name of Object.keys(SheetPrefixes)) {
      assert.ok(SheetPrefixes[ name ])
    }
  }))
})

/* global describe, before, after, it */
