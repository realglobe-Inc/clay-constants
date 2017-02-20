/**
 * Test case for driverSpec.
 * Runs with mocha.
 */
'use strict'

const DriverSpec = require('../lib/driver_spec.js')
const assert = require('assert')
const co = require('co')

describe('driver-spec', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Driver spec', () => co(function * () {
    for (let name of Object.keys(DriverSpec)) {
      assert.ok(DriverSpec[ name ])
    }
  }))
})

/* global describe, before, after, it */
