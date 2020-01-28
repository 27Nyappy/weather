import React, { useState, useEffect } from 'react';
import WeatherForm from '../components/WeatherForm';
import getWeather from '../services/WeatherApi';

const Weather = () => {
  const [zip, updateZip] = useState('');
  const [days, updateDays] = useState('');
  const [weatherInfo, updateWeatherInfo] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    getWeather(days, zip)
      .then(res => updateWeatherInfo(res));
  };

  const handleDayChange = ({ target }) => updateDays(target.value);

  const handleZipChange = ({ target }) => updateZip(target.value);

  return (
    <WeatherForm handleSubmit={handleSubmit} handleDayChange={handleDayChange} handleZipChange={handleZipChange} />
  );
};

export default Weather;