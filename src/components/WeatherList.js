import React from 'react';
import PropTypes from 'prop-types';
import WeatherCard from './WeatherCard';
import styles from './WeatherList.css';

const WeatherList = ({ weatherItems }) => {
  // no need to redeclare / rename the passed variable ^
  let weatherLists = weatherItems;
  // i prefer this always be an array and check length value (should be 1 or many)
  if(weatherLists.length === undefined) {
    return (
      <li className={styles.WeatherList}>
        <WeatherCard  mainTemp={weatherLists.mainTemp} feelsLike={weatherLists.feelsLike} maxTemp={weatherLists.maxTemp} minTemp={weatherLists.minTemp} humidity={weatherLists.humidity} detail={weatherLists.detail} description={weatherLists.description} icon={weatherLists.icon} date={weatherLists.date} city={weatherLists.city} />
      </li>
    );
  }
  else {
    weatherLists = weatherItems.map((card) => {
      return (
        <li key={card.date}>
          <WeatherCard mainTemp={card.mainTemp} feelsLike={card.feelsLike} maxTemp={card.maxTemp} minTemp={card.minTemp} humidity={card.humidity} detail={card.detail} description={card.description} icon={card.icon} date={card.date} city={card.city} />
        </li>
      );
    });
  }

  // we should generally have one return statement in a component
  // there's a bug here where the ul is only rendered on load and is removed on re-render
  // the conditional logic placed outside these multiple returns makes it easy to overlook :)
  return (
    <ul className={styles.WeatherList}>
      {weatherLists}
    </ul>
  );
};

// nice use of propTypes
// at Navis, we use a pattern of including default values
// when destructured at the top of the component, like:
// {
//   weatherItems = []
// } = props;
// we should not use the same var for multiple data types - easily creates confusion :)
WeatherList.propTypes = {
  weatherItems: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired
};

export default WeatherList;