import Leaflet from 'leaflet';
import React, {Component} from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import {emptyMap} from './utils';
import './IndicatorMap.css';
import 'leaflet/dist/leaflet.css';
Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/';

// Create your own class, extending from the Marker class.
class ExtendedMarker extends Marker {
	// "Hijack" the component lifecycle.
  componentDidMount() {
  	// Call the Marker class componentDidMount (to make sure everything behaves as normal)
  	super.componentDidMount();

    // Access the marker element and open the popup.
    this.leafletElement.openPopup();
  }
}

class IndicatorMap extends Component {
  constructor(props) {
    super(props);
    this.newOptions = emptyMap;
    this.state = {
      lat: -3.727492,
      lng: -38.495038,
      zoom: 17
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
                <ExtendedMarker position={position}>
                  <Popup>
                    <span>
                      Av. Antônio Justa, 2525 - Meireles<br/>
                      Fortaleza - CE<br/> 60165-090<br/>
                    <a href="https://maps.google.com/maps?ll=-3.727492,-38.495038&z=17&t=m&hl=pt-BR&gl=BR&mapclient=embed&q=Av.%20Ant%C3%B4nio%20Justa%2C%202525%20-%20Meireles%20Fortaleza%20-%20CE%2060165-090" target="_blank">
                      Visualizar mapa ampliado
                    </a>
                    </span>
                  </Popup>
                </ExtendedMarker>
              </Map>
            </main>
            <aside className="HolyGrail-ads">
              <div className="controls">
                &nbsp;
              </div>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

export default IndicatorMap;
