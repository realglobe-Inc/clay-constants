/**
 * Test case for idSpec.
 * Runs with mocha.
 */
'use strict'

const IdSpec = require('../lib/id_spec.js')
const assert = require('assert')
const co = require('co')

describe('id-spec', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Id spec', () => co(function * () {
    for (let name of Object.keys(IdSpec)) {
      assert.ok(IdSpec[ name ])
    }
  }))
})

/* global describe, before, after, it */
