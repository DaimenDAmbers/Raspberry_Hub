$(document).ready( function () {
  // $.ajax({
  //   url: "php/tweet.php",
  //   type: "get",
  //   success: function(data) {
  //     console.dir(data);
  //     updateTwitterDOM(data);
  //   }
  // });
  require "../twit";

  var T = new Twit({
    consumerApiKey: "Zi2YZlt5GrkFdnPDAQM840sYi",
    consumerApiSecretKey: "WbeHhAF5utlGnJ4lY1ELIf4lnFKbDJmut8OPUsxiJNWi5G3mHS",
    accessToken: "2200974972-xyb9647TzntMqtGseJPGJXs2cT5Ahv0YWwtRqkL",
    accessTokenSecret: "tYHwDwLnl1AV56ENC13YkW7NDjllM5NcVmsCX6L4sy9E9",
    timeout_ms: 60*1000,
    strictSSL: true,
  });

  T.get('account/verify_credentials', { skip_status: true })
    .catch(function (err) {
      console.log('caught error', err.stack)
    });
});



/*T.post('statuses/home_timeline', {"name" => 'Kings', "count" => 2, "exclude_replies" => true}, function() {
  console.log(data);
});*/


function updateTwitterDOM(data) {
  var tweets = data.coordinates;
  //for (var i = 0; i < tweets.length; i++) {
    $('#tweets').html(tweets);
  //}
}
