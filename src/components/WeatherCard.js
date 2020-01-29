import React from 'react';
import PropTypes from 'prop-types';
import styles from './WeatherCard.css';

const WeatherCard = ({ mainTemp, feelsLike, maxTemp, minTemp, humidity, detail, description, icon, date, city }) => {
  return (
    <div className={styles.Card}>
      <h2>{city}</h2>
      <p>{date}</p>
      <div>
        <span>{mainTemp}&#176;</span>
        <img src={icon} alt="Weather Icon" />
      </div>
      <p>{maxTemp}&#176;/{minTemp}&#176; Feels like {feelsLike}&#176;</p>
      <p>{detail}, {description} and {humidity}% humidity</p>
    </div>
  );
};

WeatherCard.propTypes = {
  mainTemp: PropTypes.number.isRequired,
  feelsLike: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  detail: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired
};

export default WeatherCard;
