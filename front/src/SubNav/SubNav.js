import React from 'react';
import './SubNav.css';

const SubNave = () => {
  return (
    <div className="siteHeader">
      <div className="siteHeader__section">
        <div className="siteHeader__item siteHeaderLogo">
          <div className="fa fa-inbox"></div>
        </div>
        <div className="siteHeader__item siteHeaderButton is-site-header-item-selected">RESERVAS:	(85) 3109.3333</div>
        <div className="siteHeader__item siteHeaderButton">Facebook</div>
        <div className="siteHeader__item siteHeaderButton">Twitter</div>
      </div>
      <div className="siteHeader__section">
        <div className="siteHeader__item siteHeaderButton">Search</div>
        <div className="siteHeader__item siteHeaderButton">Settings</div>
        <div className="siteHeader__item siteHeaderButton">Log out</div>
      </div>
    </div>
  );
};

export default SubNave;
