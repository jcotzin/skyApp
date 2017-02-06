function weather() {
  // setting variables for location div, api key and the url for the request
  var location = document.getElementById('location');
  var key = "df768aa6c59c0b0dc2f3e14c2df8d225";
  var url = "https://api.forecast.io/forecast/";
  // can also use https://api.darksky.net/forecast/

  navigator.geolocation.getCurrentPosition(success, error);

  // if the request works
  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    location.innerHTML = `The Latitude is ${latitude}° and the Longitude is ${longitude}°`;

    $.getJSON(url + key + "/" + latitude + "," + longitude + "?callback=?", function(data) {
      $('#temp').html(data.currently.temperature + '° F');
      $('#minutely').html(data.minutely.summary);
      $('#icon').html(data.minutely.icon);
    });
  }

  // if the request fails
  function error() {
    location.innerHTML = "unable to retrieve your location."
  }

  location.innerHTML = "Locating..."
}

weather();
