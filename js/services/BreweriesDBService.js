"use strict"

import * as request from "request-promise-native";

const URL = "http://localhost:3000/";

let instance = null;

class BreweriesDBService {
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }
  async getBrewery() {s
    var endpoint = URL + "brewery?";
    return request.get(endpoint,
        (error, response, body) => {
        if (error) {
          console.dir(error);
          alert("error");
        } else {
          console.dir(response);
          console.dir(body);
        }
      });
  }

  async search(zip) {
    var options = {
      method: "GET",
      json: true,
      uri: URL + "locations?postalCode=" + zip
    }
    try {
      const response = await request(options);
      return response;
    } catch(e) {
      alert(e);
    }
    // request.get(endpoint, (error, response, body) => {
    //   if (error) {
    //     console.dir(error);
    //     alert("error");
    //   } else {
    //     var parsed = JSON.parse(body);
    //     return parsed;
    //   }
    // })
  }
}

export default BreweriesDBService;