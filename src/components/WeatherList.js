import React from 'react';
import PropTypes from 'prop-types';
import WeatherCard from './WeatherCard';

const WeatherList = ({ weatherItems }) => {
  let weatherLists = weatherItems;
  console.log(weatherItems);
  if(weatherLists.length === undefined) {
    return (
      <li>
        <WeatherCard  mainTemp={weatherLists.mainTemp} feelsLike={weatherLists.feelsLike} maxTemp={weatherLists.maxTemp} minTemp={weatherLists.minTemp} humidity={weatherLists.humidity} detail={weatherLists.detail} description={weatherLists.description} icon={weatherLists.icon} date={weatherLists.date} city={weatherLists.city} />
      </li>
    );
  }
  else {
    weatherLists = weatherItems.map((card) => {
      console.log(card);
      return (
        <li key={card.date}>
          <WeatherCard mainTemp={card.mainTemp} feelsLike={card.feelsLike} maxTemp={card.maxTemp} minTemp={card.minTemp} humidity={card.humidity} detail={card.detail} description={card.description} icon={card.icon} date={card.date} city={card.city} />
        </li>
      );
    });
  }

  return (
    <ul>
      {weatherLists}
    </ul>
  );
};

WeatherList.propTypes = {
  weatherItems: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired
};

export default WeatherList;