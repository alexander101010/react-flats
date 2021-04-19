import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import flats from "../../data/flats.js";

import FlatList from "./flat_list.jsx";
import Marker from "./marker.jsx";

console.log(flats);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0],
      flats,
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  };

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng,
    };
  }

  render() {
    return (
      <div>
        <FlatList
          flats={flats}
          selectFlat={this.selectFlat}
          selectedFlat={this.state.selectedFlat}
        />
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={13}>
            <Marker
              lat={this.state.selectedFlat.lat}
              lng={this.state.selectedFlat.lng}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
