var MediaType = require("medium-type")

exports.parse = function(msg) {
  if (typeof msg["content-type"] != "string") return msg

  msg = Object.create(msg)
  msg["content-type"] = new MediaType(msg["content-type"])
  return msg
}
