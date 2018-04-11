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
          dayTemp: '75',
          nightTemp: '61',
          forecast: 'sunny'
        },
        {
          name: 'tuesday',
          dayTemp: '72',
          nightTemp: '65',
          forecast: 'cloudy'
        },
        {
          name: 'wednesday',
          dayTemp: '50',
          nightTemp: '45',
          forecast: 'rainy'
        },
        {
          name: 'thursday',
          dayTemp: '80',
          nightTemp: '67',
          forecast: 'sunny'
        },
        {
          name: 'friday',
          dayTemp: '31',
          nightTemp: '23',
          forecast: 'snowy'
        },
        {
          name: 'saturday',
          dayTemp: '45',
          nightTemp: '37',
          forecast: 'cloudy'
        },
        {
          name: 'sunday',
          dayTemp: '78',
          nightTemp: '67',
          forecast: 'sunny'
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
    const filteredDays = this.state.days.filter(day => day.name.includes(this.state.setWeather));
    console.log(filteredDays[0]);

    return (
      <div className="weather-app">
        <SearchForm day={this.state.days} onClick={day => this.setWeather(day)} />
        <WeatherTemp temperature={filteredDays} />
        <WeatherImage weather={filteredDays[0]}/>
      </div>
    )
  }
};


//<WeatherTemp dayTemp={filteredDays.dayTemp} nightTemp={filteredDays.nightTemp} />