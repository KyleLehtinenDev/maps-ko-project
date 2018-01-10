"use strict"

import * as ko from "knockout";
import {BreweryDbService} from "../services/breweries-db.js";

class Header {
  constructor() {
    this.searchInput = ko.observable();
    this.searchType = ko.observable("brewery");
  }
  search() {
    console.log(this.searchInput() + " " + this.searchType());
  }
}

export {Header};
