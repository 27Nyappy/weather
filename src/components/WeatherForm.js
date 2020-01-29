import React from 'react';
import PropTypes from 'prop-types';
import styles from './WeatherForm.css';

const WeatherForm = ({ handleSubmit, handleZipChange, handleDayChange }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.WeatherForm}>
      <section>
        <div id="zip">
          <h2>Please Enter Your Zip Code</h2>
          <input type="number" max="99950" min="00501" onChange={handleZipChange} placeholder="ZIP" required />
        </div>
        <div id="days">
          <h2>Select Time</h2>
          <div id="selections">
            <input type="radio" name="day-options" id="current-weather" onChange={handleDayChange} value="weather" required />
            <label htmlFor="current-weather">Current Weather</label>
            <input type="radio" name="day-options" id="five-day-weather" onChange={handleDayChange} value="forecast" required />
            <label htmlFor="five-day-weather">Five Day Forecast</label>
          </div>
        </div>
      </section>
      <input type="submit" value="Get Weather" />
    </form>
  );
};

WeatherForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleDayChange: PropTypes.func.isRequired,
  handleZipChange: PropTypes.func.isRequired
};

export default WeatherForm;