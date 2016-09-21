/**
 * Constant variables for clay
 * @module clay-constants
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get DriverSpec () { return d(require('./driver_spec')) },
  get LogPrefix () { return d(require('./log_prefix')) },
  get SheetPrefixes () { return d(require('./sheet_prefixes')) }
}
