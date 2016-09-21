/**
 * Constant variables for clay
 * @module clay-constants
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get SheetPrefixes () { return d(require('./sheet_prefixes')) }
}
