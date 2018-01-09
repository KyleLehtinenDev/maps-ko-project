import * as ko from "knockout";

import "./google-maps.js";
import {BreweriesDbService} from "./breweries-db.js";


var service = new BreweriesDbService();
console.dir(service);
service.getBrewery();