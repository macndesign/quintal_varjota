import React, {Component} from 'react';
import axios from 'axios';
import Cleave from 'cleave.js/react';
import 'cleave.js/dist/addons/cleave-phone.br';
import './Team.css';

class Team extends Component {

  constructor(props) {
    super(props);
    this.reset = {
      name: '',
      phone: '',
      email: '',
      quantity: '',
      timeStamped: (new Date()).toJSON(),
      date: '',
      time: '',
      data: null,
      error: false,
      success: false
    };
    this.state = {
      ...this.reset,
      dataReservation: null,
      loading: false
    };
  }

  componentDidMount() {
    this.setState({
      dataReservation: this.props.reservations
    });
  }

  handleChangeName = (event) => {
    this.setState({name: event.target.value});
  };

  handleChangePhone = (event) => {
    this.setState({phone: event.target.value});
  };

  handleChangeEmail = (event) => {
    this.setState({email: event.target.value});
  };

  handleChangeQuantity = (event) => {
    this.setState({quantity: event.target.value});
  };

  handleChangeTimeStamped = (event) => {
    this.setState({time_stamped: event.target.value});
  };

  handleChangeDate = (event) => {
    this.setState({date: event.target.value});
  };

  handleChangeTime = (event) => {
    this.setState({time: event.target.value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const data = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      quantity: this.state.quantity,
      time_stamped: this.state.date + 'T' + this.state.time + ':00Z'
    };
    axios.post(this.props.api['reservation'], data)
      .then(res => {
        axios.get(this.props.api['reservation']).then(res2 => {
          this.setState({
            dataReservation: res2.data, 
            data: res.data, 
            error: false, 
            success: true,
            loading: false
          });
        });
      }).catch((err) => {
        this.setState({
          data: err.response.data, 
          error: true, 
          success: false,
          loading: false
        });
      });
  };

  inputArea = () => (
    <div className="reservation-inputArea">
      {/* Name */}
      <input type='text' placeholder='Nome. Ex.: Maria Valentina' value={this.state.name} onChange={this.handleChangeName}/>
      <div className="error">
      {this.state.error && this.state.data.name && this.state.data.name.map((item) => (
        <div>{item}</div>
      ))}
      </div>
      {/* Phone */}
      <Cleave placeholder="Telefone. Ex.: 00 90000 0000"
              options={{phone: true, phoneRegionCode: 'br'}}
              onChange={this.handleChangePhone} />
      <div className="error">
      {this.state.error && this.state.data.phone && this.state.data.phone.map((item) => (
        <div>{item}</div>
      ))}
      </div>
      {/* Email */}
      <input type='email' placeholder='Email. Ex.: nome@email.com' value={this.state.email} onChange={this.handleChangeEmail}/>
      <div className="error">
      {this.state.error && this.state.data.email && this.state.data.email.map((item) => (
        <div>{item}</div>
      ))}
      </div>
      {/* Quantity */}
      <input type='text' placeholder='Quantidade de cadeiras. Ex.: 8' value={this.state.quantity} onChange={this.handleChangeQuantity}/>
      <div className="error">
      {this.state.error && this.state.data.quantity && this.state.data.quantity.map((item) => (
        <div>{item}</div>
      ))}
      </div>
      {/* Time Stamped
      <input type='text' placeholder='Data e Hora' value={this.state.timeStamped} onChange={this.handleChangeTimeStamped}/>
      <div className="error">
      {this.state.error && this.state.data.time_stamped && this.state.data.time_stamped.map((item) => (
        <div>{item}</div>
      ))}
      </div> */}
      <div className='reservation-inputArea--dateTime'>
        <input type='date' placeholder='Data' value={this.state.date} onChange={this.handleChangeDate}/>
        <input type='time' placeholder='Hora' value={this.state.time} onChange={this.handleChangeTime}/>
      </div>
      <div className="error-dateTime">
      {this.state.error && this.state.data.time_stamped && this.state.data.time_stamped.map((item) => (
        <div>{item}</div>
      ))}
      </div>
      <button className='btn reservation-btn' type='submit' disabled={this.state.loading}>
        <i className="fa fa-paper-plane" aria-hidden="true"/>&nbsp;
        Reservar
      </button>
    </div>
  );

  handleBackToForm = () => {
    this.setState({...this.reset});
  };

  successArea = () => (
    <div className="reservation-successArea">
      <div>
        <strong>Obrigado pelo contato!</strong><br/><br/>
        Ressaltamos que sua reserva só será confirmada quando você receber um e-mail da casa confirmando 
        a mesma, caso o e-mail não seja enviado, isso significa que sua reserva não foi aprovada devido 
        condições operacionais da casa.<br/><br/>
        <strong>Contato:</strong><br/><br/>
        <a href="tel:(85) 3109.3333">(85) 3109-3333</a><br/>
        <a href="mailto:marketing@quintaldavarjota.com">marketing@quintaldavarjota.com</a>
      </div><br/><br/>
      <button className='btn reservation-btn reservation-btn--back' onClick={this.handleBackToForm}>
        <i className="fa fa-history" aria-hidden="true"/>&nbsp;
        Voltar
      </button>
    </div>
  );

  formatTimeNumber = (number) => {
    if (number < 10) {
      return `0${number}`;
    } else {
      return number;
    }
  };

  render() {
    return (
      <div id="team" className="team">
        <div className="HolyGrail-body">
          <div className="text">
            <div className='reservation'>
              <div className='reservation-form'>
                <h2>Reservas</h2>
                <p>Preencha o formulário abaixo para fazer sua reserva.</p>
                <form onSubmit={this.handleSubmit}>
                  {!this.state.success && this.inputArea()}
                  {this.state.success && this.successArea()}
                </form>
              </div>
              {/*<div className='reservation-list'>
                <h2>Lista</h2>
                <div className='reservation-list--item'>
                  {this.state.dataReservation &&
                    this.state.dataReservation.results.map((item) => (
                      <div key={item.id} className='reservation-list--items' style={{borderLeft: item.active ? 'solid 4px #5CAB7D' : 'solid 4px #000'}}>
                        <div>{(new Date(item.time_stamped)).toLocaleDateString() + ' às ' + this.formatTimeNumber((new Date(item.time_stamped)).getUTCHours()) + ':' + this.formatTimeNumber((new Date(item.time_stamped)).getUTCMinutes())  + ' h'}</div>
                        <div className='reservation-list--items--data'>
                          <div className='reservation-list--items--data-qty'>{item.quantity} pessoas</div>
                          <div className='reservation-list--items--data-name'>{item.name}</div>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="reservation-list--legend">
                  <div className="reservation-list--legend-text">Legenda:</div>
                  <div className="reservation-list--legend-confirmed">Confirmado</div>
                  <div className="reservation-list--legend-confirmed" style={{marginLeft: '5px', background: '#000'}}>Não Confirmado</div>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
