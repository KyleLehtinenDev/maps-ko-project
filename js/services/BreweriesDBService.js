import * as request from "request-promise-native";

const URL = "http://localhost:3000/";


// 
const BASE_BREWERY_DB_URL = "http://api.brewerydb.com/v2/",
      APIKEY = "&key=" + BREWERY_DB_API_KEY,
      BREWERIES_EP = "breweries?key=",
      BASE_REQUEST_OPTIONS = {
        timeout: 1500
      };

let instance = null;

class BreweriesDBService {
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }
  async getBrewery() {
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
      const response = request.get(
        BASE_BREWERY_DB_URL + BREWERIES_EP + APIKEY,
        BASE_REQUEST_OPTIONS,
        (error, response, body) => {
          return response;
        });
      // const response = await request(options);
      
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