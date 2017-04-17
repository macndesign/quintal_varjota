import React from 'react';
import Newsletter from '../Newsletter/Newsletter';
import './AboutHouse.css';

const AboutHouse = ({api}) => (
  <div className="about-house">
    <div id="about-house" className="HolyGrail">
      <h1>Sobre a Casa</h1>
      <div className="HolyGrail-body">
        <main className="HolyGrail-content" id="map-container">
          Loren ipsum.
        </main>
        <aside className="HolyGrail-ads">
          <button className='btn reservation'>
            <i className="fa fa-cutlery" aria-hidden="true"/>
            Faça sua reserva
          </button>
          <Newsletter api={api}/>
        </aside>
      </div>
    </div>
  </div>
);

export default AboutHouse;
