import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App/App';
import './index.css';

axios.get('/api/').then(res => {
  ReactDOM.render(
    <App api={res.data}/>,
    document.getElementById('root')
  );
});
