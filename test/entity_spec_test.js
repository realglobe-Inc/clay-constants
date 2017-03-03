/**
 * Test case for entitySpec.
 * Runs with mocha.
 */
'use strict'

const EntitySpec = require('../lib/entity_spec.js')
const assert = require('assert')
const co = require('co')

describe('entity-spec', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Entity spec', () => co(function * () {
    for (let name of Object.keys(EntitySpec)) {
      assert.ok(EntitySpec[ name ])
    }
  }))
})

/* global describe, before, after, it */
