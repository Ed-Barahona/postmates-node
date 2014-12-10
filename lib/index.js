
var assert = require('assert');
var noop = function(){};
var request = require('superagent');

global.setImmediate = global.setImmediate || process.nextTick.bind(process);

/**
 * Expose a `Postmates` client.
 */

module.exports = Postmates;

/**
 * Initialize a new `Postmates` with Postmates developer credentials.
 */

function Postmates(customerId, apiKey){
  if (!(this instanceof Postmates)) return new Postmates(customerId, apiKey);
  if (!customerId || customerId.length === 0)
    return throw "Need to provide customerId.";
  if (!apiKey || apiKey.length === 0) return throw "Need to provide API key.";
  this.customerId = customerId;
  this.apiKey = apiKey;
  this.host = 'https://api.postmates.com/v1/customers/' + customerId + '/';
}

/**
 * Request a Delivery quote.
 *
 * @param {String} pickup
 * @param {String} dropoff
 * @param {Function} fn (optional)
 */

Postmates.prototype.quote = function(pickup, dropoff, fn) {
};

/**
 * Create a Delivery.
 *
 * @param {Object} delivery
 *   @property {String} manifest
 *   @property {String} pickup_name
 *   @property {String} pickup_address
 *   @property {String} pickup_phone_number
 *   @property {String} pickup_business_name
 *   @property {String} pickup_notes
 *   @property {String} dropoff_name
 *   @property {String} dropoff_address
 *   @property {String} dropoff_phone_number
 *   @property {String} dropoff_business_name
 *   @property {String} dropoff_notes
 *   @property {Integer} quote_id
 * @param {Function} fn (optional)
 */

Postmates.prototype.new = function(delivery, fn) {
};

/**
 * Get Delivery details.
 *
 * @param {String} id
 * @param {Function} fn (optional)
 */

Postmates.prototype.get = function(id, fn) {
};

/**
 * List all Deliveries.
 *
 * @param {String} filter (optional)
 * @param {Function} fn (optional)
 *
 * @return {Array}
 */

Postmates.prototype.list = function(filter, fn) {
};

/**
 * Cancel a Delivery.
 *
 * @param {String} id
 * @param {Function} fn (optional)
 *
 * @return {Object}
 */

Postmates.prototype.cancel = function(id, fn) {
};
