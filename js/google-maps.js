import * as gmaps from "google-maps";

gmaps.KEY = "AIzaSyBbrYMPyNsAXMC8kdT-cgHEGH1z-HajOwQ";
gmaps.VERSION = '3.14';

gmaps.load((google) => {
    var elem = document.getElementById('map');
    // Constructor creates a new map - only center and zoom are required.
    var map;
    map = new google.maps.Map(document.getElementById('map'), {
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
