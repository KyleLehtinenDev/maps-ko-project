// Proxy requests for BreweryDB
var KEYS = require("dotenv").config();

if (KEYS.error) { throw KEYS.error; }

var express = require('express')
var request = require("request");
var app = express()

const BREWERY_DB_URL = "http://api.brewerydb.com/v2/";
 
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
  console.log("Making request to: " + BREWERY_DB_URL + "breweries?key=" + process.env.BREWERY_DB_API_KEY);
  request.get(
    BREWERY_DB_URL + "breweries?key=" + process.env.BREWERY_DB_API_KEY,
    {
      timeout: 1500
    },
    (error, response, body) => {
      // console.dir(error);
      // console.dir(response);
      console.dir(body);
      res.send(body);
    })
  
});
 
app.listen(3000)