import * as ko from "knockout";

class BreweryListViewModel {
  constructor(breweries) {
    this.breweries = breweries || null;
  }
}

export { BreweryListViewModel };
