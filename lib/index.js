/**
 * Constant variables for clay
 * @module clay-constants
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get ConfigKeys () { return d(require('./config_keys')) },
  get CryptFormat () { return d(require('./crypt_format')) },
  get DriverSpec () { return d(require('./driver_spec')) },
  get LogPrefixes () { return d(require('./log_prefixes')) },
  get RecordCols () { return d(require('./record_cols')) },
  get SheetNames () { return d(require('./sheet_names')) },
  get SheetPrefixes () { return d(require('./sheet_prefixes')) }
}
