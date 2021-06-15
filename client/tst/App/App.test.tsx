import React from 'react';
import App from '../../src/App/App';
import {shallow} from 'enzyme';

it('renders successfully', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeDefined();
});
