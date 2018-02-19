import * as ko from "knockout";
import {BreweriesDBService} from "../services/BreweriesDBService.js";

class HeaderViewModel {

  constructor() {
    this.searchInput = ko.observable();
    this.searchType = ko.observable("brewery");
  }

  search() {
  }
}

export { HeaderViewModel };
