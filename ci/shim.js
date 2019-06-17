#!/usr/bin/env node

/**
 * Generate shim source
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const ababel = require('ababel')
const filecopy = require('filecopy')

apeTasking.runTasks('shim', [
  () => ababel('**/*.js', {
    cwd: 'lib',
    out: 'shim/browser'
  }),
  () => filecopy('lib/*.json', 'shim/browser', {
    force: true,
    mkdirp: true
  })
], true)
