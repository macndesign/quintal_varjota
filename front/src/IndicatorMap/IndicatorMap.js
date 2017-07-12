import _ from "lodash";
import React, {Component} from 'react';
import Newsletter from '../Newsletter/Newsletter';
import {
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker,
} from "react-google-maps";

import './IndicatorMap.css';

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={17}
    defaultCenter={{ lat: -3.729229, lng: -38.4914377 }}
  >
    {props.markers.map(marker => (
      <Marker {...marker} onClick={() => props.onMarkerClick(marker)}>
        {/*
          Show info window only if the 'showInfo' key of the marker is true.
          That is, when the Marker pin has been clicked and 'onCloseClick' has been
          Successfully fired.
        */}
        {marker.showInfo && (
          <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
            <div style={{color: '#777', maxWidth: 250}}>
              {marker.infoContent}<br/>
              <a target='_blank' href='https://www.google.com.br/maps/place/Quintal+da+Varjota+%7C+Restaurante+em+Fortaleza/@-3.7291433,-38.4914699,17z/data=!4m5!3m4!1s0x7c748799412a763:0xf0fc6cb4c30aa1e2!8m2!3d-3.729229!4d-38.489249?hl=pt-BR'>
                Ver no Google Maps
              </a>
            </div>
          </InfoWindow>
        )}
      </Marker>
    ))}
  </GoogleMap>
));

class IndicatorMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
      markers: [{
        position: { lat: -3.729229, lng: -38.4914377 },
        key: `Quintal da Varjota`,
        defaultAnimation: 2,
        showInfo: false,
        infoContent: `Quintal da Varjota - Av. Antônio Justa, 3525 - Meireles, Fortaleza - CE, 60165-090`
      }]
    };
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleMarkerClose = this.handleMarkerClose.bind(this);
  }

  // Toggle to 'true' to show InfoWindow and re-renders component
  handleMarkerClick(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: true,
          };
        }
        return marker;
      }),
    });
  }

  handleMarkerClose(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: false,
          };
        }
        return marker;
      }),
    });
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
            <main className="HolyGrail-content">
              <div className="map-container">
                <GettingStartedGoogleMap
                  containerElement={
                    <div style={{ height: `100%` }} />
                  }
                  mapElement={
                    <div style={{ height: `100%` }} />
                  }
                  markers={this.state.markers}
                  onMarkerClick={this.handleMarkerClick}
                  onMarkerClose={this.handleMarkerClose}
                />
              </div>
            </main>
            <aside className="HolyGrail-ads">
              <Newsletter api={this.props.api}/><br/>
              <div className='hours'>
                <h3>Horário de Funcionamento</h3>
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
                  <img key={item.id} src={item.image}
                    alt={item.name} title={item.name}/>
                ))}
              </div>
              <div className='phone-mail'>
                <p>
                  <a href={'mailto:' + this.state.info.email}>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span className="label">{this.state.info.email}</span>
                  </a>
                </p>
                <p>
                  <a href={'tel:' + this.state.info.phone_reservations}>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span className="label">{this.state.info.phone_reservations}</span>
                  </a>
                </p>
              </div><br/>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

export default IndicatorMap;
