import React, {Component} from 'react';
import axios from 'axios';
import './Newsletter.css';

class Newsletter extends Component {
  constructor(props) {
    super(props);
    this.reset = {
      name: '',
      email: '',
      data: null,
      error: false,
      success: false
    };
    this.state = {...this.reset};
  }
  handleChangeName = (event) => {
    this.setState({name: event.target.value});
  };
  handleChangeEmail = (event) => {
    this.setState({email: event.target.value});
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {name: this.state.name, email: this.state.email};
    axios.post(this.props.api['newsletter'], data)
      .then(res => {
        this.setState({data: res.data, error: false, success: true});
      }).catch((err) => {
        this.setState({data: err.response.data, error: true, success: false});
      });
  };
  inputArea = () => (
    <div className="newsletter-inputArea">
      <input type='text' placeholder='Nome' value={this.state.name} onChange={this.handleChangeName}/>
      <div className="error">
      {this.state.error && this.state.data.name && this.state.data.name.map((item) => (
        <div>{item}</div>
      ))}
      </div>
      <input type='email' placeholder='Email' value={this.state.email} onChange={this.handleChangeEmail}/>
      <div className="error">
      {this.state.error && this.state.data.email && this.state.data.email.map((item) => (
        <div>{item}</div>
      ))}
      </div>
      <button className='btn newsletter-btn' type='submit'>
        <i className="fa fa-paper-plane" aria-hidden="true"/>
        Cadastrar
      </button>
    </div>
  );
  handleBackToForm = () => {
    this.setState({...this.reset});
  };
  successArea = () => (
    <div className="newsletter-successArea">
      <div>Email cadastrado com sucesso!</div>
      <button className='btn newsletter-btn newsletter-btn--back' onClick={this.handleBackToForm}>
        <i className="fa fa-history" aria-hidden="true"/>
        Voltar
      </button>
    </div>
  );
  render() {
    return (
      <div className='newsletter'>
        <h2>Newsletter</h2>
        <p>Assine nossa newsletter e fique por dentro de todas as novidades.</p>
        <form onSubmit={this.handleSubmit}>
          {!this.state.success && this.inputArea()}
          {this.state.success && this.successArea()}
        </form>
      </div>
    );
  }
}

export default Newsletter;
