var MediaType = require("media-type")

exports.parse = function(msg) {
  if (typeof msg["content-type"] != "string") return msg

  msg = Object.create(msg)
  msg["content-type"] = MediaType.fromString(msg["content-type"])
  return msg
}
