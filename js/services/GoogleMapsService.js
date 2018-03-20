"use strict"

import * as gmaps from "google-maps";

// Injected by webpack from .env file
gmaps.KEY = GMAPS_API_KEY;
gmaps.VERSION = GMAPS_API_VERSION;

let map = gmaps.load((google) => {
  let elem = document.getElementById('map'),
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.7413549, lng: -73.9980244},
        zoom: 13
      }),
      tribeca = {lat: 40.719526, lng: -74.0089934},
      marker = new google.maps.Marker({
        position: tribeca,
        map: map,
        title: 'First Marker!'
      });
});
