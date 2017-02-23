/**
 * Specifications for driver
 * @namespace DriverSpec
 */
'use strict'

/** Required method for a driver */
exports.REQUIRED_METHODS = 'one,list,create,update,destroy,drop'

/** Methods bindable with resource name */
exports.RESOURCE_BINDABLE = 'one,list,create,update,destroy,drop,oneBulk,listBulk,createBulk,updateBulk,destroyBulk'
