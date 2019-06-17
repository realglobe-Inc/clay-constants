/**
 * Constant variables for clay
 * @module clay-constants
 */

'use strict'


const CryptFormat = require('./crypt_format')
const DataTypes = require('./data_types')
const DateFormats = require('./date_formats')
const DriverSpec = require('./driver_spec')
const EntitySpec = require('./entity_spec')
const IdSpec = require('./id_spec')
const LogPrefixes = require('./log_prefixes')
const LumpSpec = require('./lump_spec')
const ReservedResources = require('./reserved_resources')
const ResourceEvents = require('./resource_events')
const ResourceSpec = require('./resource_spec')
const SerialTypes = require('./serial_types')

exports.CryptFormat = CryptFormat
exports.DataTypes = DataTypes
exports.DateFormats = DateFormats
exports.DriverSpec = DriverSpec
exports.EntitySpec = EntitySpec
exports.IdSpec = IdSpec
exports.LogPrefixes = LogPrefixes
exports.LumpSpec = LumpSpec
exports.ReservedResources = ReservedResources
exports.ResourceEvents = ResourceEvents
exports.ResourceSpec = ResourceSpec
exports.SerialTypes = SerialTypes

module.exports = {
  CryptFormat,
  DataTypes,
  DateFormats,
  DriverSpec,
  EntitySpec,
  IdSpec,
  LogPrefixes,
  LumpSpec,
  ReservedResources,
  ResourceEvents,
  ResourceSpec,
  SerialTypes
}
