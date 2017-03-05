import React, {Component} from 'react';
import axios from 'axios';
import SubNav from '../SubNav/SubNav';
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
      showHambMenu: false,
      // Global data
      dataContactInfo: null
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
    // Get global data
    axios.get(this.props.api['contact-info'] + '?active=True').then(res => {
      this.setState({dataContactInfo: res.data});
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.changeMenuItemClassNameOnScroll);
  }

  render() {
    return (
      <div className="HolyGrail">
        <header style={{backgroundColor: 'rgba(255, 255, 255, 0.6)'}}>
          {this.state.dataContactInfo && <SubNav infos={this.state.dataContactInfo}/>}
          <MainMenu isFooter={false} handleScrollToMenuItemClick={this.handleScrollToMenuItemClick}
            handleHambMenuClick={this.handleHambMenuClick}/>
        </header>
        <Intro api={this.props.api}/>
        <AboutHouse/>
        <Links/>
        <Team/>
        {this.state.dataContactInfo && <IndicatorMap infos={this.state.dataContactInfo}/>}
        <footer>
          {this.state.dataContactInfo && <Footer infos={this.state.dataContactInfo}/>}
          {this.state.dataContactInfo && <SubNav infos={this.state.dataContactInfo}/>}
        </footer>
        <HambMenu show={this.state.showHambMenu}
          handleScrollToMenuItemClick={this.handleScrollToMenuItemClick}/>
      </div>
    );
  }
}

export default App;
