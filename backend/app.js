"use strict"

// Fetch environment vars and fail fast if missing
var KEYS = require("dotenv").config();
if (KEYS.error) { throw KEYS.error; }

// 
const express = require('express'),
      request = require("request"),
      app = express(),
      BASE_BREWERY_DB_URL = "http://api.brewerydb.com/v2/",
      APIKEY = process.env.BREWERY_DB_API_KEY,
      BREWERIES_EP = "breweries?key=",
      BASE_REQUEST_OPTIONS = {
        timeout: 1500
      };

 
app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  response.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get('/test', function (req, res) {
  res.send('Hello World')
})

app.get("/brewery", function(req, res) {
  request.get(
    BASE_BREWERY_DB_URL + BREWERIES_EP + APIKEY,
    BASE_REQUEST_OPTIONS,
    (error, response, body) => {
      res.send(body);
    });
});

app.get("/beer", (req, res) => {

});



// Begin listening on localhost:3000
app.listen(3000)
