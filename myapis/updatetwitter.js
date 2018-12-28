$(document).ready( function () {
  $.ajax({
    url: "php/tweet.php",
    type: "get",
    success: function(data) {
      console.dir(data);
      updateTwitterDOM(data);
    }
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
