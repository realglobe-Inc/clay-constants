/**
 * Constant variables for clay
 * @module clay-constants
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get CryptFormat () { return d(require('./crypt_format')) },
  get DriverSpec () { return d(require('./driver_spec')) },
  get LogPrefixes () { return d(require('./log_prefixes')) },
  get SheetPrefixes () { return d(require('./sheet_prefixes')) }
}
