import React from 'react';
import { shallow } from 'enzyme';
import WeatherForm from './WeatherForm';

describe('Weather Form Component', () => {
  it('Renders Weather Form', () => {
    const wrapper = shallow(<WeatherForm handleSubmit={() => true} handleZipChange={() => true} handleDayChange={() => true} />);
    expect(wrapper).toMatchSnapshot();
  });
});