/**
 * Constant variables for clay
 * @module clay-constants
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get CryptFormat () { return d(require('./crypt_format')) },
  get LogPrefixes () { return d(require('./log_prefixes')) }
}
