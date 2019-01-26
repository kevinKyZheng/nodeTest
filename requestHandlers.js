var exec = require("child_process").exec
var queryString = require("querystring")
var fs = require("fs")
var formidable = require("formidable")

function start(response,postData) {
    console.log("route log")
    // exec("ls -l", (error, stdout, stderr)=>{
    //     response.writeHead(200, { "Content-Type": "text/plain" });
    //     response.write(stdout)
    //     response.end()
        // })
        ;
    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
        'method="post">' +
        '<input type="file" name="upload">'+
        '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
        '</html>';
    
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(body)
    response.end()
}

// function upload(response,postData) {
//     console.log("route upload")
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.write("hello out" + queryString.parse(postData).text)
//     response.end()
//     return "Upload"
// }

function upload(response,request) {
    console.log("route upload")
    var form = new formidable.IncomingForm()
    form.parse(request, (error, fields, files) => { 
        fs.renameSync(files.upload.path,'tmp/test.png')
        response.writeHead(200, { "Content-Type": "text/html" })
        response.write("received image:<br/>")
        response.write("<img src='/show' />")
        response.end()
    })
    return "Upload"
}

function show(response, postData) { 
    fs.readFile("tmp/test.png", "binary", function (error, file) { 
        if (error) { 
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        } else{
            response.writeHead(200, {"Content-Type": "image/png"});
            response.write(file,"binary");
            response.end();
        }
    })
}


exports.show = show
exports.start = start
exports.upload = upload