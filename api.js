//Code that will take care of the apis
function getApi() {
  var request = new XMLHttpRequest();
  url = "http://5c3626bb6fc11c0014d3300a.mockapi.io/api/v1/users";
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("test2").innerHTML = this.responseText;
    }
  }
  request.open('GET', url, true);
  request.send();
}

function myFunction() {
  var response = "Hi";
  alert(response);
}
