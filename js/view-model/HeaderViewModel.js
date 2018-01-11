"use strict"

import * as ko from "knockout";
import {BreweryDbService} from "../services/breweries-db.js";

class HeaderViewModel {

  constructor() {
    this.searchInput = ko.observable();
    this.searchType = ko.observable("brewery");
  }

  search() {
  }
}

export { HeaderViewModel };
