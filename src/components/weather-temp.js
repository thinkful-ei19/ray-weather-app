import React from 'react';

import './weather-temp.css';

export default function WeatherTemp(props) {
    const dayOfWeek = props.temperature.map((temperature, index) =>
        <li key={index}>
            {temperature.name}
        </li>
    );
    
    const dayTemp = props.temperature.map((temperature, index) =>
        <li key={index}>
            Day Temperature: {temperature.dayTemp}
        </li>
    );

    const nightTemp = props.temperature.map((temperature, index) =>
        <li key={index}>
            Night Temperature: {temperature.nightTemp}
        </li>
    );

    return (
       <ul className="weather-temp">
            {dayOfWeek}
            {dayTemp}
            {nightTemp}
       </ul>
    );
}