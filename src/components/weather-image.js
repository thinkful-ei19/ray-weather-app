import React from 'react';

import './weather-image.css';

export default function WeatherImage(props) {
    const sunny = <img src="https://www.flaticon.com/premium-icon/icons/svg/463/463957.svg" alt="sun icon" />;
    const cloudy = <img src="https://www.flaticon.com/premium-icon/icons/svg/463/463978.svg" alt="cloud icon" />;
    const rainy = <img src="https://www.flaticon.com/premium-icon/icons/svg/463/463961.svg" alt="rain icon" />;
    const snowy = <img src="https://image.flaticon.com/icons/png/512/382/382569.png" alt="snow icon" />;

    // console.log(props.forecast);
    if(props.weather.forecast === 'sunny') {
        return <div>{sunny}</div>;
    } else if(props.weather.forecast === 'cloudy') {
        return <div>{cloudy}</div>;
    } else if(props.weather.forecast === 'rainy') {
        return <div>{rainy}</div>;
    } else if(props.weather.forecast === 'snowy') {
        return <div>{snowy}</div>;
    }
};