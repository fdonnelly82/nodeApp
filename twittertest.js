/**
 * Created by 1302264 on 30/11/2015.
 */
var Twitter = require('twitter');
var http = require('http')
var port = process.env.PORT || 1337;
var json = [];

var client = new Twitter({
    consumer_key: 'NVtfmoGndxwEtOYHvtwbCaXHT',
    consumer_secret: 'D29j4FV3mR2yTCsAkZmRvfWhOAX8JaEsjBDeHSgP4Li9DqbOTQ',
    access_token_key: '4329471077-wFImJkKeGEHDWlZLDXgFBfCADmGrscrw3geSnH7',
    access_token_secret: 'MPThhPwIK4TBBapNQjms8WPKJbdSkbjwLLBUF6rNuYkH7'
});

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*' });
    client.get('search/tweets', {q: 'lolcat'}, function(error, tweets) {
        for (var i = 0; i< tweets.statuses.length ; i++)
        {
            json.push({name: tweets.statuses[i].user.name, text: tweets.statuses[i].text});
        }
        response.end(JSON.stringify(json));
    });
}).listen(port);