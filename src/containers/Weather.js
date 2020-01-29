import React, { useState } from 'react';
import WeatherForm from '../components/WeatherForm';
import getWeather from '../services/WeatherApi';
import WeatherList from '../components/WeatherList';
import styles from './Weather.css';

const Weather = () => {
  const [zip, updateZip] = useState('');
  const [days, updateDays] = useState('');
  const [weatherInfo, updateWeatherInfo] = useState([]);
  const [err, updateErr] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    {err ? updateErr(false) : err;}
    getWeather(days, zip)
      .then(res => updateWeatherInfo(res))
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
        updateErr(true);
      });
  };

  const handleDayChange = ({ target }) => updateDays(target.value);

  const handleZipChange = ({ target }) => updateZip(target.value);

  return (
    <>
      <WeatherForm handleSubmit={handleSubmit} handleDayChange={handleDayChange} handleZipChange={handleZipChange} />
      {weatherInfo !== undefined ? <WeatherList weatherItems={weatherInfo}/> : <></>}
      {err ? <h2 className={styles.Error}>PLEASE ENTER A VALID ZIP CODE</h2> : <></>}
    </>
  );
};

export default Weather;