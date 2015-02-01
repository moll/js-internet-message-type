InternetMessageType.js API Documentation
========================================
### [InternetMessageType](#InternetMessageType)
- [parse](#InternetMessageType.parse)(message)

### [InternetMessageBody](#InternetMessageBody)
- [parse](#InternetMessageBody.parse)(message)


<a name="InternetMessageType" />
InternetMessageType
-------------------


**Examples**:
```javascript
var InternetMessageType = require("internet-message-type")
```

<a name="InternetMessageType.parse" />
### InternetMessageType.parse(message)
Parse the `Content-Type` header of the given [InternetMessage][] with
[MediumType][].  
Returns a new message without modifying the given one.

[MediumType]: https://github.com/moll/js-medium-type
[InternetMessage]: https://github.com/moll/js-internet-message

**Examples**:
```javascript
var InternetMessage = require("internet-message")
var InternetMessageType = require("internet-message-type")

var headers = {"Content-Type": "application/json"}
var msg = new InternetMessage(headers, '{"name":"John","age":42}')

var type = InternetMessageType.parse(msg)["content-type"]
type.type // => "application"
type.subtype // => "json"
```


<a name="InternetMessageBody" />
InternetMessageBody
-------------------


**Examples**:
```javascript
var InternetMessageBody = require("internet-message-type/body")
```

<a name="InternetMessageBody.parse" />
### InternetMessageBody.parse(message)
Parse the `body` of a given [InternetMessage][].  
Returns a new message without modifying the given one.

Currently supports only JSON (both `application/json` and the `+json`
suffix).

[InternetMessage]: https://github.com/moll/js-internet-message

**Examples**:
```javascript
var InternetMessage = require("internet-message")
var InternetMessageBody = require("internet-message-type/body")

var headers = {"Content-Type": "application/json"}
var msg = new InternetMessage(headers, '{"name":"John","age":42}')

InternetMessageBody.parse(msg).body // => {name: "John", age: 42}
```
