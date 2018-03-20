export default class GooglePlacesService {
  static async search(term) {
    let formattedTerm = term.split(" ").join("+"),
        gPlacesQuery = `https://maps.googleapis.com/maps/api/place/textsearch/` +
                       `json?query=${formattedTerm}+brewery&key=${GOOGLE_PLACES_KEY}`;    
    return fetch(gPlacesQuery);
  }
}
