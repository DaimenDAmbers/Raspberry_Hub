$(document).ready(function () {
  console.log('Weather Doc Ready!');

  $('#submit2').click(function () {
    var URL = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/30318?apikey=" + ApiKey.weatherApiKey
$.getJSON(URL, function (data) {
  console.dir(data);
  updateDOM(data);
});
    /*$.ajax({
      url: "http://dataservice.accuweather.com/forecasts/v1/daily/1day/30318?apikey=" + ApiKey.weatherApiKey,
      dataType: 'jsonp',
      type: 'get',
      success: function(data){
        console.log(data);
        updateDOM(data);
      }
    });*/
  });

});

function updateDOM(data) {
  var date = data.DailyForecasts[0].Date;
  $('#date').html(date);
}
