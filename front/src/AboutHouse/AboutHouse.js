import React from 'react';
import Newsletter from '../Newsletter/Newsletter';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './AboutHouse.css';

const settings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '60px',
  slidesToShow: 3,
  speed: 500
};

const AboutHouse = ({api, aboutHouse}) => aboutHouse.results.length > 0 && (
  <div className="about-house">
    <div id="about-house" className="HolyGrail">
      <div className="HolyGrail-body">
        <main className="HolyGrail-content">
          {aboutHouse.results[0].descriptions_about_house.map((item) => (
            <div key={item.id} className="description">
              <div className="descriptionText">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <div className="descriptionImage">
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          ))}
          <div className="aboutHouse-sliderWrapper">
            <Slider {...settings}>
              {aboutHouse.results[0].images_about_house.map((item) => (
                <div key={item.id} className="image">
                  <img src={item.image} alt={item.title} />
                </div>
              ))}
            </Slider>
          </div>
        </main>
        <aside className="HolyGrail-ads">
          <Newsletter api={api}/>
        </aside>
      </div>
    </div>
  </div>
);

export default AboutHouse;
