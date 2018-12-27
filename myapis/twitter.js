$(document).ready(function () {
  console.log('Twitter Doc Ready!');

  $('#submit').click(function () {
    var search_term = {
      q: $('#search').val(),
      count: $('#count').val()
    };
    search(search_term);
  });

});

function search(search_term) {
  console.log("searching for ");
  console.dir(search_term);
  var URL = 'https://api.twitter.com/1.1/search/tweets.json?' + $.param(search_term);
  $.getJSON(URL, function (data) {
    updateTwitterDOM(data)
  });

  /*$.ajax({
    url: 'https://api.twitter.com/1.1/search/tweets.json?' + $.param(search_term),
    header: {
      authorization: ApiKey.consumerApiKey,
    },
    dataType: 'json',
    success: function(data){
      console.dir(data);
      //$('#tweets').html(data);
    }
  });*/
}

/*function updateTwitterDOM(data) {
  var tweets = data.statuses;
  $('#tweets').html(tweets);
}*/
