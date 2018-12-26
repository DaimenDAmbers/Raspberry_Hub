$(document).ready(function () {
  console.log('Doc Ready!');

  $('#submit').click(function () {
    var search_term = {
      q: 'bowery'
    };
    search(search_term);
  });

});

function search(search_term) {
  console.log("searching for ");
  console.dir(search_term);

  $.ajax({
    url: 'https://api.twitter.com/1.1/search/tweets.json?' + $.param(search_term),
    dataType: 'jsonp',
    success: function(data){
      console.dir(data);
      //$('#tweets').html(data);
    }
  });
}
