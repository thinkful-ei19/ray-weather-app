import React from 'react';

import './weather-temp.css';

export default function WeatherTemp(props) {
    const forecast = props.days;
    console.log(forecast);
    return (
        // <ul className="weather-temp">
        //     <li>{props.monday}</li>
        //     <li>dayTemp: 71</li>
        // </ul>
        null
    );
};