import * as request from "request";

// const URL = "http://api.brewerydb.com/v2/";

class BreweriesDbService {
  constructor() {}
  async getBrewery() {
    return request.get("http://localhost:3000/brewery",
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
}

export {BreweriesDbService};