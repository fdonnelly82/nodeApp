/**
 * Created by 1302264 on 23/11/2015.
 */

var http = require('http')
var port = process.env.PORT || 1337;

http.createServer(function(request, responce) {
    responce.writeHead(200, { 'Content-Type' : 'text/plain' });
    responce.end('Hello World\n');
}).listen(port);