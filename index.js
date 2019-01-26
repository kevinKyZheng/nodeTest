var server = require("./server")
var router = require("./route")
var requesthandler = require("./requestHandlers")

var handle = {}
handle["/"] = requesthandler.start
handle["/start"] = requesthandler.start
handle["/upload"] = requesthandler.upload
handle["/show"] = requesthandler.show

server.start(router.route,handle)