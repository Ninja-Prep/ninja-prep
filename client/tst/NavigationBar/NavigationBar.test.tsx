import React from 'react';

import NavigationBar from 'containers/NavigationBar/NavigationBar';
import {mount, shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Context as ResponsiveContext} from 'react-responsive';

import {DEVICE_TYPES, routeWrapper} from '../TestHelper';

test.each(Object.entries(DEVICE_TYPES))('renders successfully on %p', (deviceType: string, deviceWidth: number) => {
  const wrappingComponent = ResponsiveContext.Provider;
  const wrappingComponentProps = {value: {width: deviceWidth}};
  const mountProps = {wrappingComponent, wrappingComponentProps};

  const wrapper = shallow(routeWrapper(<NavigationBar />), mountProps);
  expect(wrapper).toBeDefined();
});

test.each(Object.entries(DEVICE_TYPES))('matches snapshot on %p', (deviceType: string, deviceWidth: number) => {
  const wrappingComponent = ResponsiveContext.Provider;
  const wrappingComponentProps = {value: {width: deviceWidth}};
  const mountProps = {wrappingComponent, wrappingComponentProps};

  const wrapper = mount(routeWrapper(<NavigationBar />), mountProps);
  expect(toJson(wrapper)).toMatchSnapshot();
});
