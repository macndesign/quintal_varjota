import React from 'react';
import './SubNav.css';

const SubNave = ({infos}) => {
  return (
    <div className="siteHeader">
      <div className="siteHeader__section">
        <a href={infos.results[0].evaluation_link}
          target="_blank"
          className="siteHeader__item siteHeaderLogo">
          <i className="fa fa-tripadvisor"></i>
          <span className="label">Avaliação</span>
        </a>
        <a href={'tel:' + infos.results[0].phone_reservations}
          className="siteHeader__item siteHeaderLogo">
          <i className="fa fa-phone"></i>
          <span className="label">Reservas:	{infos.results[0].phone_reservations}</span>
        </a>
      </div>
      <div className="siteHeader__section social-network-top">
        {infos.results[0].socials.map(item => <a href={item.link} key={item.id}
          target="_blank" style={{backgroundColor: item.bg_color}} title={item.name}
          className="siteHeader__item siteHeaderButton is-site-header-item-selected">
          <i className={'fa fa-' + item.name}></i>
        </a>)}
      </div>
    </div>
  );
};

export default SubNave;
