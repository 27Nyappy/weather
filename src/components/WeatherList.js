import React from 'react';
import PropTypes from 'prop-types';
import WeatherCard from './WeatherCard';
import styles from './WeatherList.css';

const WeatherList = ({ weatherItems }) => {
  let weatherList = weatherItems.map((card) => {
    return (
      <li key={card.date}>
        <WeatherCard mainTemp={card.mainTemp} feelsLike={card.feelsLike} maxTemp={card.maxTemp} minTemp={card.minTemp} humidity={card.humidity} detail={card.detail} description={card.description} icon={card.icon} date={card.date} city={card.city} />
      </li>
    );
  });

  return (
    <ul className={styles.WeatherList}>
      {weatherList}
    </ul>
  );
};

WeatherList.propTypes = {
  weatherItems: PropTypes.array.isRequired
};

export default WeatherList;