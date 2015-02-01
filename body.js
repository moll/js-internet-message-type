var Type = require("./")
/**
 * @example
 * var InternetMessageBody = require("internet-message-type/body")
 *
 * @class InternetMessageBody
 */

/**
 * Parse the `body` of a given [InternetMessage][].  
 * Returns a new message without modifying the given one.
 *
 * Currently supports only JSON (both `application/json` and the `+json`
 * suffix).
 *
 * [InternetMessage]: https://github.com/moll/js-internet-message
 *
 * @example
 * var InternetMessage = require("internet-message")
 * var InternetMessageBody = require("internet-message-type/body")
 *
 * var headers = {"Content-Type": "application/json"}
 * var msg = new InternetMessage(headers, '{"name":"John","age":42}')
 *
 * InternetMessageBody.parse(msg).body // => {name: "John", age: 42}
 *
 * @method parse
 * @param {Object} message
 * @static
 */
exports.parse = function(msg) {
  if (!("content-type" in msg)) return msg

  var typed = typeof msg["content-type"] == "string"? Type.parse(msg) : msg
  var encoding = getEncoding(typed)
  if (encoding == null) return msg

  msg = Object.create(msg)
  switch (encoding) {
    case "json": msg.body = JSON.parse(msg.body); break
  }

  return msg
}

function getEncoding(msg) {
  var type = msg["content-type"]
  if (type.name == "application/json") return "json"
  if (type.suffix == "json") return "json"
  return null
}
