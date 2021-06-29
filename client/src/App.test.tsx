import React from 'react';

import {shallow} from 'enzyme';

import App from './App';

it('renders successfully', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeDefined();
});
