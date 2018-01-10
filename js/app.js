"use strict"

import * as ko from "knockout";

import "./services/google-maps.js";
import {BreweriesDbService} from "./services/breweries-db.js";
import {Header} from "./view-model/header.js";


var service = new BreweriesDbService();
console.dir(service);
// service.getBrewery();

ko.applyBindings(new Header(), document.getElementById("header"));
