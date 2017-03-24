/**
 * Test case for resourceEvents.
 * Runs with mocha.
 */
'use strict'

const ResourceEvents = require('../lib/resource_events.js')
const { ok } = require('assert')
const co = require('co')

describe('resource-events', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Resource events', () => co(function * () {
    for (let name of Object.keys(ResourceEvents)) {
      ok(ResourceEvents[ name ])
      ok(/^cly/.test(ResourceEvents[ name ]))
    }
  }))
})

/* global describe, before, after, it */
