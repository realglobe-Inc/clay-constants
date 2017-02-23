/**
 * Test case for reservedResources.
 * Runs with mocha.
 */
'use strict'

const ReservedResources = require('../lib/reserved_resources.js')
const assert = require('assert')
const co = require('co')

describe('reserved-resources', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Reserved resources', () => co(function * () {
    for (let name of Object.keys(ReservedResources)) {
      assert.ok(ReservedResources[ name ])
      assert.ok(/^Clay/.test(ReservedResources[ name ]))
    }
  }))
})

/* global describe, before, after, it */
