import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";

class MapDisplay extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    );
  }
}

export default MapDisplay;
