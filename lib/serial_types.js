/**
 * Just a alias of`DataTypes`. Deprecated.
 * @private
 * @deprecated
 * @enum {string} SerialTypes
 */

'use strict'

const DataTypes = require('./data_types')

/** @lends SerialTypes */
module.exports = Object.assign({}, DataTypes)
