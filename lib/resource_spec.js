/**
 * Specifications for resource
 * @namespace ResourceSpec
 */
'use strict'

/** Available letters for resource name string */
exports.NAME_PATTERN = /^[A-Za-z][A-Za-za-z0-9\-_]*$/

/** Available letters for resource version string */
exports.VERSION_PATTERN = /^[0-9a-z\.\-]*$|^latest$/
