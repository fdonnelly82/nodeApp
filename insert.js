/**
 * Created by 1302264 on 23/11/2015.
 */

var mongodb = require('mongodb');

var http = require('http');

var port = process.env.PORT || 1337;

var url = 'mongodb://FAJDonnelly:0211AlexanderJames@ds054288.mongolab.com:54288/nodejs';

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

            var collection = db.collection('users');

            var user1 = {name: 'modulus admin', age: 42, roles: ['admin', 'moderator', 'user']};
            var user2 = {name: 'modulus user', age: 22, roles: ['user']};
            var user3 = {name: 'modulus super admin', age: 42, roles: ['super-admin', 'admin', 'moderator', 'user']};

            collection.insert([user1, user2, user3], function (err, result) {
                if (err) {
                    responce.write('Insert faild ' + err + "\n");
                } else {
                    console.log(result);
                    responce.write('Inserted ' + result.insertedCount + ' documents ok.' + "\n");
                }
            });

            db.close();
            responce.end('Finished, Connection closed \n');
        }
        responce.end('Finished, Connected closed \n');
    });
}).listen(port);