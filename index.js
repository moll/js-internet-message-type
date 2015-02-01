var MediaType = require("medium-type")
/**
 * @example
 * var InternetMessageType = require("internet-message-type")
 *
 * @class InternetMessageType
 */

/**
 * Parse the `Content-Type` header of the given [InternetMessage][] with
 * [MediumType][].  
 * Returns a new message without modifying the given one.
 *
 * [MediumType]: https://github.com/moll/js-medium-type
 * [InternetMessage]: https://github.com/moll/js-internet-message
 *
 * @example
 * var InternetMessage = require("internet-message")
 * var InternetMessageType = require("internet-message-type")
 *
 * var headers = {"Content-Type": "application/json"}
 * var msg = new InternetMessage(headers, '{"name":"John","age":42}')
 *
 * var type = InternetMessageType.parse(msg)["content-type"]
 * type.type // => "application"
 * type.subtype // => "json"
 *
 * @method parse
 * @param {Object} message
 * @static
 */
exports.parse = function(msg) {
  if (typeof msg["content-type"] != "string") return msg

  msg = Object.create(msg)
  msg["content-type"] = new MediaType(msg["content-type"])
  return msg
}
