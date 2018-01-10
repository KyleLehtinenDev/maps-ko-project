"use strict"

import * as request from "request";

const URL = "http://localhost:3000/";

class BreweriesDbService {
  constructor() {}
  async getBrewery() {
    var EP_URL = URL + "brewery";
    return request.get(EP_URL,
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

  async getBeer() {

  }
}

export {BreweriesDbService};