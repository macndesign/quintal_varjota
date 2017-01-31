import Leaflet from 'leaflet';
import React, {Component} from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import {emptyMap} from './utils';
import './IndicatorMap.css';
import 'leaflet/dist/leaflet.css';
Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/';

class IndicatorMap extends Component {
  constructor(props) {
    super(props);
    this.newOptions = emptyMap;
    this.state = {
      lat: -3.974040,
      lng: -63.243196,
      zoom: 7
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div className="indicator-map">
        <div id="indicator-map" className="HolyGrail">
          <div className="HolyGrail-body">
            <main className="HolyGrail-content" id="map-container">
              <Map center={position} zoom={this.state.zoom}>
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <Marker position={position}>
                  <Popup>
                    <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
                  </Popup>
                </Marker>
              </Map>
            </main>
            <aside className="HolyGrail-ads">
              <div className="controls">
                Test
              </div>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

export default IndicatorMap;
