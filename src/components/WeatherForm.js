import React from 'react';
import PropTypes from 'prop-types';

const WeatherForm = ({ handleSubmit, handleZipChange, handleDayChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="number" max="99950" min="00501" onChange={handleZipChange} required />
      <input type="radio" name="day-options" id="current-weather" onChange={handleDayChange} value="weather" required />
      <label htmlFor="current-weather">Current Weather</label>
      <input type="radio" name="day-options" id="five-day-weather" onChange={handleDayChange} value="forecast" required />
      <label htmlFor="five-day-weather">Five Day Forecast</label>
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