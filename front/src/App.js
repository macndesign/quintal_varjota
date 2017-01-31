import React, { Component } from 'react';
import SubNave from './SubNav/SubNav';
import 'font-awesome/css/font-awesome.css';
import './css/main.css';

class App extends Component {
  render() {
    return (
      <header className="Site-header">
        <SubNave/>
        <div className="Header" role="banner">
          <div className="Header-titles">
            <h1 className="Header-title"><a href="#">Quintal <i>da</i> Varjota</a></h1>
            <h2 className="Header-subTitle">em construção</h2>
          </div>
        </div>
      </header>
    );
  }
}

export default App;
