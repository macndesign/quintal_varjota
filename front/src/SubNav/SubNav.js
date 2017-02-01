import React from 'react';
import './SubNav.css';
import 'font-awesome/css/font-awesome.css';

const SubNave = () => {
  return (
    <div className="siteHeader">
      <div className="siteHeader__section">
        <a href="https://www.tripadvisor.com.br/Restaurant_Review-g303293-d10698732-Reviews-Quintal_da_Varjota-Fortaleza_State_of_Ceara.html"
          target="_blank"
          className="siteHeader__item siteHeaderLogo">
          <i className="fa fa-tripadvisor" aria-hidden="true"></i>
          <span className="label">Avaliação</span>
        </a>
        <a href="tel:8531093333"
          className="siteHeader__item siteHeaderLogo">
          <i className="fa fa-phone" aria-hidden="true"></i>
          <span className="label">Reservas:	(85) 3109.3333</span>
        </a>
      </div>
      <div className="siteHeader__section social-network-top">
        <a href="https://www.facebook.com/quintaldavarjota/"
          target="_blank" style={{backgroundColor: '#3b5999'}}
          className="siteHeader__item siteHeaderButton is-site-header-item-selected">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/quintaldavarjota/"
          target="_blank" style={{backgroundColor: '#e4405f'}}
          className="siteHeader__item siteHeaderButton is-site-header-item-selected">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="https://twitter.com/quintalvarjota"
          target="_blank" style={{backgroundColor: '#55acee'}}
          className="siteHeader__item siteHeaderButton is-site-header-item-selected">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="https://plus.google.com/+QuintaldaVarjotaGastrobarFortaleza/about"
          target="_blank" style={{backgroundColor: '#dd4b39'}}
          className="siteHeader__item siteHeaderButton is-site-header-item-selected">
          <i className="fa fa-google-plus" aria-hidden="true"></i>
        </a>
        <a href="https://www.youtube.com/channel/UC8sL3Y3cFlC1G2qc74TP73w"
          target="_blank" style={{backgroundColor: '#cd201f'}}
          className="siteHeader__item siteHeaderButton is-site-header-item-selected">
          <i className="fa fa-youtube-play" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default SubNave;
