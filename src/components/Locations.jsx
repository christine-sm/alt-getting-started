var React = require('react');
var AltContainer = require('alt/AltContainer');
var LocationStore = require('../stores/LocationStore');
var LocationActions = require('../actions/LocationActions');

var Locations = React.createClass({
  getInitialState() {
    return LocationStore.getState();
  },
  componentDidMount() {
    LocationStore.listen(this.onChange);
    LocationActions.fetchLocations();
  },
  componentWillUnmount() {
    LocationStore.unlisten(this.onChange);
  },
  onChange(state) {
    this.setState(state);
  },

  render() {
    if (this.state.errorMessage) {
      return (
        <div>Something is wrong.</div>
      );
    }

    if (!this.state.locations.length) {
      return (
        <div>
          <img src='default.gif' />
        </div>
      );
    }

    return (
      <div>
        <ul>
          {this.state.locations.map((location) => {
            return (
              <li>{location.name}</li>
            )
          })}
        </ul>
      </div>
    );
  }
});

module.exports = Locations;
