/**
 * Created by 1302264 on 23/11/2015.
 */

var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function(request, responce) {
    responce.writeHead(200, { 'Content-Type' : 'text/html' });
    responce.write("<!DOCTYPE 'html'>");
    responce.write("<html>");
    responce.write("<head>");
    responce.write("<title>Hello World Page</title>");
    responce.write("</head>");
    responce.write("<body>");
    responce.write("<h1>");
    responce.write("Hello World!");
    responce.write("</h1>");
    responce.write("</body>");
    responce.write("</html>");
    responce.end();
});
server.listen(port);
console.log("Server is listening");