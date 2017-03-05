import React, {Component} from 'react';
import MainMenu from '../MainMenu/MainMenu';
import scrollTo from '../App/scrollTo';
import {resizeMenuOnScroll, addRemoveClassOnScroll} from '../App/utils';
import './Footer.css';

class Footer extends Component {
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
      <div className="footer">
          <MainMenu isFooter={true} handleScrollToMenuItemClick={this.handleScrollToMenuItemClick}
            handleHambMenuClick={this.handleHambMenuClick}/>
      </div>
    )
  }
}

export default Footer;
