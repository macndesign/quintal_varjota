import React from 'react';
import './Intro.css';
import img1 from '../images/intro6.jpg';

const backgroundStyle = {
  backgroundColor: '#fff',
  background: `url(${img1})`,
  backgroundSize: 'cover'
};

const Intro = () => (
  <div id="intro" className="intro" style={backgroundStyle}>
    <div className="HolyGrail-body">
      <div className="text">
        <h1>Apresentação</h1>
        <p>Algo sobre o restaurante.</p>
      </div>
    </div>
  </div>
);

export default Intro;
