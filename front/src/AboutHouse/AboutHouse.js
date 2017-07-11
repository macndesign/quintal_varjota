import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './AboutHouse.css';

class AboutHouse extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 3,
      speed: 500
    };
    const aboutHouseSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return this.props.aboutHouse.results.length > 0 && (
      <div className="about-house">
        <div id="about-house" className="HolyGrail">
          <div className="HolyGrail-body">
            <main className="HolyGrail-content">
              <Slider ref={ c => this.slider = c } { ...aboutHouseSettings }>
                {this.props.aboutHouse.results[0].descriptions_about_house.map((item) => (
                  <div key={item.id} className="description">
                    <div className="descriptionText">
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                      <p className='descriptionButtonContainer'>
                        <button className='descriptionButton' onClick={this.previous}>
                          <i className="fa fa-angle-left"></i>
                        </button>
                        <button className='descriptionButton' onClick={this.next}>
                          <i className="fa fa-angle-right"></i>
                        </button>
                      </p>
                    </div>
                    <div className="descriptionImage" style={{ backgroundImage: `url(${item.image})` }} />
                  </div>
                ))}
              </Slider>
            </main>
          </div>
          <div className="aboutHouse-sliderWrapper">
            <Slider {...settings}>
              {this.props.aboutHouse.results[0].images_about_house.map((item) => (
                <div key={item.id} className="image">
                  <img src={item.image} alt={item.title} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutHouse;
