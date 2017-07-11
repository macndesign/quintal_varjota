import React, {Component} from 'react';
import videoMP4 from './video.mp4';
import './Intro.css';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div id="intro" className="intro">
        <div className="video-wrapper">
          <video loop="true" muted="true" autoPlay="true" poster="img/videoframe.jpg">
            <source src={videoMP4} type="video/mp4"/>
            {/*<source src="video/big_buck_bunny.ogv" type="video/ogg">
            <source src="video/big_buck_bunny.webm" type="video/webm">*/}
          </video>
        </div>
      </div>
    )
  }
};

export default Intro;
