import React from 'react';
import './AboutHouse.css';

const AboutHouse = () => {
  return (
    <div className="about-house">
      <div id="about-house" className="HolyGrail">
        <h1>Sobre a Casa</h1>
        <div className="HolyGrail-body">
          <main className="HolyGrail-content" id="map-container">
            Loren ipsum.
          </main>
          <aside className="HolyGrail-ads">
            <button className='btn reservation'>
              <i className="fa fa-cutlery" aria-hidden="true"></i>
              Faça sua reserva
            </button>
            <div className='newsletter-box'>
              <h2>Newsletter</h2>
              <p>Assine nossa newsletter e fique por dentro de todas as novidades.</p>
              <form>
                <input type='text' placeholder='Nome'/>
                <input type='email' placeholder='Email'/>
                <button className='btn reservation'>
                  <i className="fa fa-paper-plane" aria-hidden="true"></i>
                  Cadastrar
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AboutHouse;
