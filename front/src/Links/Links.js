import React, {Component} from 'react';
import axios from 'axios';
import loading from './loading.gif'
import './Links.css';

class Links extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: props.menu || null,
      menuItem: props.menuItem || null,
      currItem: props.menuItem.results.length > 0 ? props.menuItem.results[0] : null
    };
  }
  handleClickThumb = (detail) => {
    this.setState({currItem: detail});
  };
  handleClickThumbArrowBtn = (url) => {
    axios.get(url).then(res => {
      this.setState({menuItem: res.data});
    });
  };
  render() {
    return (
      <div id="links" className="links">
        {this.state.menu.results.length > 0 && <div className="linksBody linksDescription">
          <h1>{this.state.menu.results[0].title}</h1>
          <p>{this.state.menu.results[0].description}</p>
        </div>}
        <div className="linksBody linksDetail">
          {this.state.currItem && <div className="linksDetail-full">
            <div className="linksDetail-image" style={{backgroundImage: `url(${this.state.currItem.image})`}}/>
            <div className="linksDetail-body">
              <h1>{this.state.currItem.title}</h1>
              <p>{this.state.currItem.description}</p>
            </div>
          </div>}
        </div>
        {this.state.menuItem.results.length > 0 && <div className="linksBody linksThumbs">
          <button className="btn linksThumbs-button--prev" disabled={!this.state.menuItem.previous}
                  onClick={() => this.handleClickThumbArrowBtn(this.state.menuItem.previous)}>
            <i className="fa fa-arrow-up" aria-hidden="true"/>
          </button>
          <div className="linksThumbs-body">
            {this.state.menuItem.results.map((item) => (
              <div key={item.id} style={item.thumb ? {backgroundImage: `url(${item.thumb})`} : {backgroundImage: `url(${loading})`}} onClick={() => this.handleClickThumb(item)}/>
            ))}
          </div>
          <button className="btn linksThumbs-button--next" disabled={!this.state.menuItem.next}
                  onClick={() => this.handleClickThumbArrowBtn(this.state.menuItem.next)}>
            <i className="fa fa-arrow-down" aria-hidden="true"/>
          </button>
        </div>}
      </div>
    );
  }
}

export default Links;
