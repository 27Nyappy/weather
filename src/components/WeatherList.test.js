import React from 'react';
import { shallow } from 'enzyme';
import WeatherList from './WeatherList';

describe('Weather List Component', () => {
  const testCards = [
    {
      mainTemp: 50.13,
      feelsLike: 43.68,
      maxTemp: 53.6,
      minTemp: 46,
      humidity: 81,
      detail: 'Rain',
      description: 'moderate rain',
      icon: 'http://openweathermap.org/img/wn/10n@2x.png',
      date: 'Mon Jan 27 2020 22:57:33 GMT-0800 (Pacific Standard Time)',
      city: 'Portland'
    },
    {
      mainTemp: 50.13,
      feelsLike: 43.68,
      maxTemp: 53.6,
      minTemp: 46,
      humidity: 81,
      detail: 'Rain',
      description: 'moderate rain',
      icon: 'http://openweathermap.org/img/wn/10n@2x.png',
      date: 'Mon Jan 27 2020 24:22:35 GMT-0800 (Pacific Standard Time)',
      city: 'Portland'
    }
  ];

  it('Renders Weather List', () => {
    const wrapper = shallow(<WeatherList weatherItems={testCards} />);
    expect(wrapper).toMatchSnapshot();
  });
});