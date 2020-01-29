import React from 'react';
import { shallow } from 'enzyme';
import WeatherCard from './WeatherCard';


describe('Weather Card Component', () => {
  const testCard = {
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
  };

  it('Renders Weather Card', () => {
    const wrapper = shallow(<WeatherCard mainTemp={testCard.mainTemp} feelsLike={testCard.feelsLike} maxTemp={testCard.maxTemp} minTemp={testCard.minTemp} humidity={testCard.humidity} detail={testCard.detail} description={testCard.description} icon={testCard.icon} date={testCard.date} city={testCard.city} />);
    expect(wrapper).toMatchSnapshot();
  });
});