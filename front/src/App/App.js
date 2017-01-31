import React, {Component} from 'react';
import MainMenu, {HambMenu} from '../MainMenu/MainMenu';
import Intro from '../Intro/Intro';
import IndicatorMap from '../IndicatorMap/IndicatorMap';
import AboutHouse from '../AboutHouse/AboutHouse';
import Links from '../Links/Links';
import Team from '../Team/Team';
import Footer from '../Footer/Footer';
import scrollTo from './scrollTo';
import {resizeMenuOnScroll, addRemoveClassOnScroll} from './utils';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHambMenu: false
    }
  }

  changeMenuItemClassNameOnScroll() {
    let homeMenuItem = document.getElementById('homeMenuItem');

    let aboutHouseMenuItem = document.getElementById('aboutHouseMenuItem');
    let aboutHouse = document.getElementById('about-house');

    let linksMenuItem = document.getElementById('linksMenuItem');
    let links = document.getElementById('links');

    let teamMenuItem = document.getElementById('teamMenuItem');
    let team = document.getElementById('team');

    let indicatorMapMenuItem = document.getElementById('indicatorMapMenuItem');
    let indicatorMap = document.getElementById('indicator-map');

    // functions call
    resizeMenuOnScroll();
    addRemoveClassOnScroll(homeMenuItem, 0);
    addRemoveClassOnScroll(aboutHouseMenuItem, aboutHouse.offsetTop);
    addRemoveClassOnScroll(linksMenuItem, links.offsetTop);
    addRemoveClassOnScroll(teamMenuItem, team.offsetTop);
    addRemoveClassOnScroll(indicatorMapMenuItem, indicatorMap.offsetTop);
  }

  handleScrollToMenuItemClick = (idSession) => {
    const session = document.getElementById(idSession);
    scrollTo(session.offsetTop);
    // To hamb menu
    this.setState({showHambMenu: false});
  };

  handleHambMenuClick = () => {
    this.setState({showHambMenu: true});
  };

  componentDidMount() {
    window.addEventListener('scroll', this.changeMenuItemClassNameOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.changeMenuItemClassNameOnScroll);
  }

  render() {
    return (
      <div className="HolyGrail">
        <header style={{backgroundColor: 'rgba(255, 255, 255, 0.6)'}}>
          <MainMenu handleScrollToMenuItemClick={this.handleScrollToMenuItemClick}
            handleHambMenuClick={this.handleHambMenuClick}/>
        </header>
        <Intro/>
        <AboutHouse/>
        <Links/>
        <Team/>
        <IndicatorMap/>
        <footer>
          <Footer/>
        </footer>
        <HambMenu show={this.state.showHambMenu}
          handleScrollToMenuItemClick={this.handleScrollToMenuItemClick}/>
      </div>
    );
  }
}

export default App;
