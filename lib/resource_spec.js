/**
 * Specifications for resource
 * @namespace ResourceSpec
 */
'use strict'

const { LATEST_VERSION } = require('./resource_versioning')

/** Available letters for resource name string */
exports.NAME_PATTERN = /^[A-Za-z][A-Za-za-z0-9\-_]*$/

/** Available letters for resource version string */
exports.VERSION_PATTERN = new RegExp(`${LATEST_VERSION}|^[0-9]+$`)
