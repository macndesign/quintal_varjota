import React from 'react';
import logo from '../MainMenu/logo.png';
import './Footer.css';

const Footer = () => (
  <div className="footer">
    <img className="logo-sm" src={logo} alt="Quintal da Varjota"/>
    <p>&copy; Todos os direitos reservados</p>
  </div>
);

export default Footer;
