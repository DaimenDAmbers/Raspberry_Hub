var Twit = require('twit');
var config = require('./config.js');

var Twitter = new Twit(config);

//
//  tweet 'hello world!'
//
//RETWEET BOT

//find the latest tweets according to the 'q' in params
var retweet = function() {
  var params = {
    q: '@mxicanmami_', //Required
    result_type: 'recent',
    count: 1,
    lang: 'en',
  }

  Twitter.get('search/tweets', params, function(err, data) {
    // if there are no errors
    if(!err) {
      // grab ID of tweet to RETWEET
      console.log(data);
      var retweetId = data.statuses[0].id_str;
      console.log(retweetId);
      //Tell TWITTER to retweet
      Twitter.post('statuses/retweet/:id', {id: retweetId }, function(err, response) {
          if (response) {
            console.log('Retweeted!');

            var reply_params = {
              status: 'Hi Maria!',
              in_reply_to_status_id: retweetId,
              auto_populate_reply_metadata: true,
            }
            console.log(reply_params);

            Twitter.post('statuses/update', reply_params, function (err, response) {
              if(response) {
                console.log('Statues updated!')
              }
              if (err) {
                console.log('Error updating status...')
              }
            });
          }
          // if there was an error while tweeting
          if (err) {
            console.log("Something went wrong while Retweeting");
          }
      });
    }
    // if unable to Search a tweets
    else {
      console.log('Something went wrong while searching...')
    }
  });
}
// Retweet every 50 minutes
retweet();
//retweet every 2 minutes
//setInterval(retweet, 120000);

var favoriteTweet = function(){
  var params = {
      q: '@mxicanmami_',  // REQUIRED
      result_type: 'recent',
      lang: 'en',
      //until: '2016-01-22',
  }
  // find the tweet
  Twitter.get('search/tweets', params, function(err,data){

    // find tweets
    var tweet = data.statuses;
    var randomTweet = ranDom(tweet);   // pick a random tweet

    // if random tweet exists
    if(typeof randomTweet != 'undefined'){
      // Tell TWITTER to 'favorite'
      Twitter.post('favorites/create', {id: randomTweet.id_str}, function(err, response){
        // if there was an error while 'favorite'
        if(err){
          console.log('CANNOT BE FAVORITE... Error');
        }
        else{
          console.log('FAVORITED... Success!!!');
        }
      });
    }
  });
}
// grab & 'favorite' as soon as program is running...
favoriteTweet();
// 'favorite' a tweet in every 60 minutes
//setInterval(favoriteTweet, 3600000);

// function to generate a random tweet tweet
function ranDom (arr) {
  var index = Math.floor(Math.random()*arr.length);
  return arr[index];
};

var timeline = function () {
  var params = {
      name: 'rameli619',  // REQUIRED
      count: 1,
      exclude_replies: true
  }
    Twitter.get('statuses/home_timeline', params, function(err, data) {
      if (!err) {
        var text = data;
        console.log(text);
        //$('#test3').html(text);
    }
    else {
        console.log('Error with retieving timeline');
    }
    //var obj = json_decode($response , true);
  });
}
//pull home timeline
//timeline();
