import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WeatherApp from './components/weather-app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <WeatherApp />, 
    document.getElementById('root'));
    registerServiceWorker();
