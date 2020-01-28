import React from 'react';
import { shallow } from 'enzyme';
import Weather from './Weather';

describe('Weather Component', () => {
  it('Renders Weather Component', () => {
    const wrapper = shallow(<Weather />);
    expect(wrapper).toMatchSnapshot();
  });
});