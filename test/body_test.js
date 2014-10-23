var InternetMessage = require("internet-message")
var Body = require("../body")

describe("InternetMessage.Body", function() {
  describe(".parse", function() {
    it("must parse given Content-Type: application/json", function() {
      var headers = {"Content-Type": "application/json"}
      var body = {name: "John", age: 42}
      var msg = new InternetMessage(headers, JSON.stringify(body))
      Body.parse(msg).body.must.eql(body)
    })

    it("must parse given Content-Type: application/vnd.foo+json", function() {
      var headers = {"Content-Type": "application/vnd.foo+json"}
      var body = {name: "John", age: 42}
      var msg = new InternetMessage(headers, JSON.stringify(body))
      Body.parse(msg).body.must.eql(body)
    })

    it("must leave Content-Type unparsed", function() {
      var headers = {"Content-Type": "application/json"}
      var body = {name: "John", age: 42}
      var msg = new InternetMessage(headers, JSON.stringify(body))
      Body.parse(msg)["content-type"].must.equal("application/json")
    })

    it("must not modify given message", function() {
      var headers = {"Content-Type": "application/json"}
      var msg = new InternetMessage(headers, "{}")
      Body.parse(msg)
      msg.body.must.equal("{}")
    })
  })
})
