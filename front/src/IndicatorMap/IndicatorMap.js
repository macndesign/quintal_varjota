import React, {Component} from 'react';
import './IndicatorMap.css';

class IndicatorMap extends Component {
  constructor(props) {
    super(props);
    // https://maps.googleapis.com/maps/api/staticmap?size=500x300&scale=2&maptype=roadmap&markers=-3.729006,-38.4895223&key=AIzaSyDPemWaG9Q6WWSjxgqiSzhFLTXkeNNjJPo
    // [this.state.info.map_lat, this.state.info.map_lng]
    // this.state.info.address
    // this.state.info.map_url
    this.state = {
      info: null,
      size: '500x300',
      scale: '2',
      maptype: 'roadmap',
      key: 'AIzaSyDPemWaG9Q6WWSjxgqiSzhFLTXkeNNjJPo'
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
            <main className="HolyGrail-content">
              <div className="map-container"
                style={{backgroundImage: `url(https://maps.googleapis.com/maps/api/staticmap?size=${this.state.size}&scale=${this.state.scale}&maptype=${this.state.maptype}&markers=${this.state.info.map_lat},${this.state.info.map_lng}&key=${this.state.key})`}}>
                <a href={this.state.info.map_url} target="_blank">{this.state.info.address}</a>
              </div>
            </main>
            <aside className="HolyGrail-ads">
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
              <div className='address'>
                <h3>Endereço</h3>
                <p>{this.state.info.address}</p>
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
