/**
 * Events for resources
 * @namespace ResourceEvents
 */
'use strict'

/** Reference add event */
exports.REF_ADD = 'cly:ref:add'
/** Reference remove event */
exports.REF_REMOVE = 'cly:ref:remove'
/** Annotation toggle event */
exports.ANNOTATION_TOGGLE = 'cly:annotate:toggle'
/** Set policy event */
exports.POLICY_SET = 'cly:policy:set'
/** Remove policy event */
exports.POLICY_REMOVE = 'cly:policy:remove'
/** Sub resource event */
exports.RESOURCE_SUB = 'cly:resource:sub'
/** Request to clear cache */
exports.INVALIDATE = 'cly:invalidate'
/** Request to clear cache bulk */
exports.INVALIDATE_BULK = 'cly:invalidate:bulk'

/** Entity create event */
exports.ENTITY_CREATE = 'cly:entity:create'
/** Entity createBulk event */
exports.ENTITY_CREATE_BULK = 'cly:entity:create:bulk'
/** Entity update event */
exports.ENTITY_UPDATE = 'cly:entity:update'
/** Entity updateBulk event */
exports.ENTITY_UPDATE_BULK = 'cly:entity:update:bulk'
/** Entity destroy event */
exports.ENTITY_DESTROY = 'cly:entity:destroy'
/** Entity destroyBulk event */
exports.ENTITY_DESTROY_BULK = 'cly:entity:destroy:bulk'
/** Entity drop event */
exports.ENTITY_DROP = 'cly:entity:drop'
/** Entity dropBulk event */
exports.ENTITY_DROP_BULK = 'cly:entity:drop:bulk'
