/**
 * Path name for restful API
 * @namespace RestPaths
 */
'use strict'

/** Path for rest root */
exports.ROOT_PATH = '/rest'

/** Path for a sheet */
exports.SHEET_PATH = `${exports.ROOT_PATH}/sheets/:sheet_name`

/** Path for a record */
exports.RECORD_PATH = `${exports.SHEET_PATH}/records/:record_key`
