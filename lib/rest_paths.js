/**
 * Path name for restful API
 * @namespace RestPaths
 */
'use strict'

/** Path for rest root */
exports.ROOT_PATH = '/rest'

/** Path for sheets */
exports.SHEETS_PATH = `${exports.ROOT_PATH}/sheets`

/** Path for a one sheet */
exports.ONE_SHEET_PATH = `${exports.SHEETS_PATH}/:sheet_name`

/** Path for records */
exports.RECORDS_PATH = `${exports.ONE_SHEET_PATH}/records`

/** Path for a one record */
exports.ONE_RECORD_PATH = `${exports.ONE_SHEET_PATH}/records/:record_key`
