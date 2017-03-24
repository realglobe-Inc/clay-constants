/**
 * Constant variables for clay
 * @module clay-constants
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get CryptFormat () { return d(require('./crypt_format')) },
  get DataTypes () { return d(require('./data_types')) },
  get DriverSpec () { return d(require('./driver_spec')) },
  get EntitySpec () { return d(require('./entity_spec')) },
  get IdSpec () { return d(require('./id_spec')) },
  get LogPrefixes () { return d(require('./log_prefixes')) },
  get LumpSpec () { return d(require('./lump_spec')) },
  get ReservedResources () { return d(require('./reserved_resources')) },
  get ResourceEvents () { return d(require('./resource_events')) },
  get ResourceSpec () { return d(require('./resource_spec')) },
  get SerialTypes () { return d(require('./serial_types')) }
}
