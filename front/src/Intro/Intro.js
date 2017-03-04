import React, {Component} from 'react';
import axios from 'axios';
import './Intro.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../images/intro6.jpg';

const backgroundStyle = {
  backgroundColor: '#fff',
  background: `url(${img1})`,
  backgroundSize: 'cover'
};

const settings = {
  dots: true,
  infinite: true,
  // speed: 500,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 4000,
  pauseOnHover: true
};

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataMainSlider: null
    }
  }

  componentDidMount() {
    axios.get(this.props.api['main-slider']).then(res => {
      this.setState({dataMainSlider: res.data});
    });
  }

  render() {
    return this.state.dataMainSlider && (
      <div id="intro" className="intro" style={backgroundStyle}>
        <div className="HolyGrail-body">
          <div className='text'>
            <div className="slider-wrapper">
              <Slider {...settings}>
                {this.state.dataMainSlider.results.map(item => (
                  <div key={item.id} style={{backgroundImage: `url(${item.image})`}}></div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Intro;
