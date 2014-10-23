var MEDIA_TYPE_PATH = "../node_modules/media-type"
var MediaType = require(MEDIA_TYPE_PATH).fromString("").constructor
var InternetMessage = require("internet-message")
var Type = require("..")

describe("InternetMessage.Type", function() {
  describe(".parse", function() {
    it("must parse given Content-Type to an instance of MediaType", function() {
      var msg = new InternetMessage({"Content-Type": "application/json"})

      var type = Type.parse(msg)["content-type"]
      type.must.be.an.instanceof(MediaType)
      type.type.must.equal("application")
      type.subtype.must.equal("json")
    })

    it("must not modify given message", function() {
      var msg = new InternetMessage({"Content-Type": "application/json"})
      Type.parse(msg)
      msg["content-type"].must.equal("application/json")
    })
  })
})
