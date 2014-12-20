var Type = require("./")

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
