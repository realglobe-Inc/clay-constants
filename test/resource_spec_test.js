/**
 * Test case for resourceSpec.
 * Runs with mocha.
 */
'use strict'

const ResourceSpec = require('../lib/resource_spec.js')
const { ok } = require('assert')
const co = require('co')

describe('resource-spec', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Resource spec', () => co(function * () {
    const { NAME_PATTERN, VERSION_PATTERN } = ResourceSpec
    ok(NAME_PATTERN.test('WonderfulWorld'))
    ok(NAME_PATTERN.test('wonderful-world'))
    ok(NAME_PATTERN.test('wonderful_world'))
    ok(!NAME_PATTERN.test('wonderful world'))

    ok(VERSION_PATTERN.test('latest'))
    ok(VERSION_PATTERN.test('1'))
    ok(VERSION_PATTERN.test('2'))
    ok(!VERSION_PATTERN.test('2.1'))
    ok(!VERSION_PATTERN.test('hoge'))
    ok(!VERSION_PATTERN.test(''))
    ok(!VERSION_PATTERN.test(null))
  }))
})

/* global describe, before, after, it */
