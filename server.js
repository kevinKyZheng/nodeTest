var http = require("http")
var url = require("url")

function start(route,handle) {
    http.createServer((request, response) => {
        var postData = ""
        var pathname = url.parse(request.url).pathname
        console.log("开始请求" + pathname)
            route(handle,pathname,response,request)

        // request.setEncoding("UTF8")
        // request.addListener("data", (postDataChunk) => {
        //     postData += postDataChunk
        //     console.log("post参数" + postData)
        // })
        // request.addListener("end", function () {
        //     route(handle,pathname,response,postData)
        // })

    }).listen(8080);
    console.log("start");
}

exports.start = start