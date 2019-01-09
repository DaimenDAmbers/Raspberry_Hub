$(document).ready(function () {
  console.log('Weather Doc Ready!');

    var URL = "http://dataservice.accuweather.com/currentconditions/v1/30318?apikey=" + ApiKey.weatherApiKey;
    console.log(URL);
    $.getJSON(URL, function (data) {
      console.dir(data);
      updateDOM(data);
    });

});

function updateDOM(data) {
  var date = data[0].LocalObservationDateTime;
  var temp = data[0].Temperature.Imperial.Value;
  var unit = data[0].Temperature.Imperial.Unit;
  $('#date').html(date);
  $('#temp').html(temp);
  $('.unit').html(unit);

}
