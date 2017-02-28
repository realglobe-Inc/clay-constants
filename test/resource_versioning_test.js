/**
 * Test case for resourceVersioning.
 * Runs with mocha.
 */
'use strict'

const ResourceVersioning = require('../lib/resource_versioning.js')
const assert = require('assert')
const co = require('co')

describe('resource-versioning', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Resource versioning', () => co(function * () {
    for (let name of Object.keys(ResourceVersioning)) {
      assert.ok(ResourceVersioning[ name ])
    }
  }))
})

/* global describe, before, after, it */
