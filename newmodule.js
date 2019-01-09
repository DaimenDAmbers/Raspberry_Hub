var config = require('./config.js');
var Twit = require('twit');
var Twitter = new Twit(config);
exports.mytimeline = function() {
  var params = {
      name: 'rameli619',  // REQUIRED
      count: 1,
      exclude_replies: true
  }
    Twitter.get('statuses/home_timeline', params, function(err, data, response) {
      if (!err) {
        var text = data[0];
        var example = data[0].created_at;
        //var string = JSON.stringify(text);
        //var obj = JSON.parse(text);
        //var logger = document.getElementById('test3');
        console.log(text);
        console.log(example);
        //const app = document.getElementById('root');
        //logger.innerHTML = obj;
    }
    else {
        console.log('Error with retieving timeline');
    }
    //var obj = json_decode($response , true);
  });
  //return text;
  //return Date();
}
