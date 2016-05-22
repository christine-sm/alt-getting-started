var alt = require('../alt');

class LocationActions {
  updateLocations(locations) {
    return locations;
  }

  fetchLocations() {
    return (dispatch) => {
      dispatch();
      LocationSource.fetch()
        .then((locations) => {
          this.updateLocations(locations);
        })
        .catch((errorMessage) => {
          this.locationsFailed(errorMessage);
        });
    }
  }

  locationsFailed(errorMessage) {
    return errorMessage;
  }
}

module.exports = alt.createActions(LocationActions);
