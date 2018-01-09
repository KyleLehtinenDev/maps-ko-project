import * as gmaps from "google-maps";

// Injected by webpack from .env file
gmaps.KEY = GMAPS_API_KEY;
gmaps.VERSION = GMAPS_API_VERSION;

var map = gmaps.load((google) => {
  var elem = document.getElementById('map');
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7413549, lng: -73.9980244},
    zoom: 13
  });
  var tribeca = {lat: 40.719526, lng: -74.0089934};
  var marker = new google.maps.Marker({
    position: tribeca,
    map: map,
    title: 'First Marker!'
  });
});
