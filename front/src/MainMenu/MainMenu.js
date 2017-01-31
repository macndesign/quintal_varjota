import React from 'react';
import logo from './logo.png';
import './MainMenu.css';

export const HambMenu = ({handleScrollToMenuItemClick, show}) => {
  return show && (
    <div className="hamb-links-wrapper">
      <ul className="hamb-links">
        <li id="homeMenuItem" className="item">
          <a onClick={() => handleScrollToMenuItemClick('intro')}>Home</a>
        </li>
        <li id="aboutHouseMenuItem" className="item">
          <a onClick={() => handleScrollToMenuItemClick('about-house')}>Sobre a Casa</a>
        </li>
        <li id="linksMenuItem" className="item">
          <a onClick={() => handleScrollToMenuItemClick('links')}>Nossos Sabores</a>
        </li>
        <li id="teamMenuItem" className="item">
          <a onClick={() => handleScrollToMenuItemClick('team')}>Reservas</a>
        </li>
        <li id="indicatorMapMenuItem" className="item">
          <a onClick={() => handleScrollToMenuItemClick('indicator-map')}>Contato</a>
        </li>
      </ul>
    </div>
  );
};

const MainMenu = ({handleScrollToMenuItemClick, handleHambMenuClick}) => {
  return (
    <ul id="main-menu" className="menu">
      <li className="logo">
        <img onClick={() => handleScrollToMenuItemClick('intro')}
          id="main-logo" src={logo} alt="Idesam"/>
      </li>
      <li className="hamb">
        <div className="hamb-wrapper" onClick={() => handleHambMenuClick()}>
          <div className="hamb-item">&nbsp;</div>
          <div className="hamb-item">&nbsp;</div>
          <div className="hamb-item">&nbsp;</div>
        </div>
      </li>
      <li id="homeMenuItem" className="item selected">
        <a onClick={() => handleScrollToMenuItemClick('intro')}>Home</a>
      </li>
      <li id="aboutHouseMenuItem" className="item">
        <a onClick={() => handleScrollToMenuItemClick('about-house')}>Sobre a Casa</a>
      </li>
      <li id="linksMenuItem" className="item">
        <a onClick={() => handleScrollToMenuItemClick('links')}>Nossos Sabores</a>
      </li>
      <li id="teamMenuItem" className="item">
        <a onClick={() => handleScrollToMenuItemClick('team')}>Reservas</a>
      </li>
      <li id="indicatorMapMenuItem" className="item">
        <a onClick={() => handleScrollToMenuItemClick('indicator-map')}>Contato</a>
      </li>
    </ul>
  )
};

export default MainMenu;
