// function route(handle,pathname,response,postData) {
//     console.log("开始路由" + pathname)
//     if (typeof handle[pathname] === 'function') {
//          handle[pathname](response,postData)
//     } else {
//         console.log("找不到");
//         response.writeHead(404, { 'Content-Type': "text/plain" });
//         response.write("404")
//         response.end()
//     }
// }
function route(handle,pathname,response,request) {
    console.log("开始路由" + pathname)
    if (typeof handle[pathname] === 'function') {
         handle[pathname](response,request)
    } else {
        console.log("找不到");
        response.writeHead(404, { 'Content-Type': "text/plain" });
        response.write("404")
        response.end()
    }
}
exports.route = route