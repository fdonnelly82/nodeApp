/**
 * Created by 1302264 on 23/11/2015.
 */

var mongodb = reguire('mongodb');

var http = require('http');

var port = process.env.PORT || 1337;

var url = 'mongodb://fajdonnelly:0211Alexanderjames@ds054288.mongolab.com:54288/nodejs';

var MongoClient = mongodb.MongoClient;

http.createServer(function(request, responce) {
    responce.writeHead(200, { 'Content-Type': 'text/plain' });
    responce.write('Connecting \n');

    MongoClient.connect(url, function (err, db) {
        responce.write('Connection Made \n');
        if (err) {
            responce.write('Unable to connect to the mongodb server. Error:' + err + "\n");
            db.close();
        } else {
            responce.write('Connection established to' + url + "\n");

            db.close();
        }
    });
}).listen(port);