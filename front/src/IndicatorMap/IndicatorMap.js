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
      info: null,
      zoom: 17
    };
  }

  componentDidMount() {
    this.setState({
      info: this.props.infos.results[0]
    });
  }

  render() {
    return this.state.info && (
      <div className="indicator-map">
        <div id="indicator-map" className="HolyGrail">
          <div className="HolyGrail-body">
            <main className="HolyGrail-content" id="map-container">
              <Map center={[this.state.info.map_lat, this.state.info.map_lng]} zoom={this.state.zoom}>
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
              <ExtendedMarker position={[this.state.info.map_lat, this.state.info.map_lng]}>
                  <Popup>
                    <span>
                    {this.state.info.address}<br/>
                    <a href={this.state.info.map_url} target="_blank">
                      Visualizar mapa ampliado
                    </a>
                    </span>
                  </Popup>
                </ExtendedMarker>
              </Map>
            </main>
            <aside className="HolyGrail-ads">
              <div className='hours'>
                <h3>Horário de Funcionamento</h3><br/>
                <ul>
                  {this.state.info.operating_hours.length > 0 &&
                    this.state.info.operating_hours.map((item) => (
                    <li key={item.id}>
                      {item.week_day1} a {item.week_day2}<br/>
                      das {item.hour1} às {item.hour2}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='cards'>Aceitamos os cartões:<br/>
                {this.state.info.cards.length > 0 &&
                  this.state.info.cards.map((item) => (
                  <span key={item.id}>{item.name}</span>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

export default IndicatorMap;
