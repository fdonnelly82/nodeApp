/**
 * Created by 1302264 on 30/11/2015.
 */
var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'NVtfmoGndxwEtOYHvtwbCaXHT',
    consumer_secret: 'D29j4FV3mR2yTCsAkZmRvfWhOAX8JaEsjBDeHSgP4Li9DqbOTQ',
    access_token_key: '4329471077-wFImJkKeGEHDWlZLDXgFBfCADmGrscrw3geSnH7',
    access_token_secret: 'MPThhPwIK4TBBapNQjms8WPKJbdSkbjwLLBUF6rNuYkH7'
});

client.get('search/tweets', {q: 'lolcat'}, function(error, tweets){
    console.log(tweets);
});