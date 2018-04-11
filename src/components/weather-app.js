import React from 'react';

import './weather-app.css';

import SearchForm from './search-form';
import WeatherImage from './weather-image';
import WeatherTemp from './weather-temp';

export default class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setWeather: 'monday',
      days: [
        {
          name: 'monday',
          dayTemp: '71',
          nightTemp: '61',
          forecast: 'rainy'
        },
        {
          name: 'tuesday',
          dayTemp: '71',
          nightTemp: '61',
          forecast: 'rainy'
        },
        {
          name: 'wednesday',
          dayTemp: '71',
          nightTemp: '61',
          forecast: 'rainy'
        },
        {
          name: 'thursday',
          dayTemp: '71',
          nightTemp: '61',
          forecast: 'rainy'
        },
        {
          name: 'friday',
          dayTemp: '71',
          nightTemp: '61',
          forecast: 'rainy'
        },
        {
          name: 'saturday',
          dayTemp: '71',
          nightTemp: '61',
          forecast: 'rainy'
        },
        {
          name: 'sunday',
          dayTemp: '71',
          nightTemp: '61',
          forecast: 'rainy'
        }
      ]
    }
  }
  
  setWeather(search) {
    this.setState({
        setWeather: search.toLowerCase()
    })
  }
  render() {
    const filteredDays = this.state.days.filter(day => day.name.toLowerCase().includes(this.state.setWeather.toLowerCase() ));
    console.log(filteredDays);

    return (
      <div className="weather-app">
        <SearchForm day={this.state.days} onClick={day => this.setWeather(day)} />
        <WeatherTemp days={filteredDays} />
        <WeatherImage />
      </div>
    )
  }
};


