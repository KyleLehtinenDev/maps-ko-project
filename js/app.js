"use strict"

import * as ko from "knockout";

import "./services/GoogleMapsService.js";
import BreweriesDBService from "./services/BreweriesDBService.js";
// import { BreweryListViewModel } from "./view-model/BreweryListViewModel.js";
// import { HeaderViewModel } from "./view-model/HeaderViewModel.js";

var service = new BreweriesDBService();

var ViewModel = function () {
  this.breweries = ko.observableArray();
  this.selectedBrewery = ko.observable();
  this.searchInput = ko.observable();
  this.search = async () => {
    this.breweries(await service.search(this.searchInput()));
  }
} 

ko.applyBindings(new ViewModel(), document.getElementById("app"));
