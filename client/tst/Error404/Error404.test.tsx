import React from 'react';

import Error404Component from 'components/Error404';
import {shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import {Context as ResponsiveContext} from 'react-responsive';

import {DEVICE_TYPES, routeWrapper} from '../TestHelper';

test.each(Object.entries(DEVICE_TYPES))(
  'renders successfully on %p',
  (deviceType: string, deviceWidth: number) => {
    const wrappingComponent = ResponsiveContext.Provider;
    const wrappingComponentProps = {value: {width: deviceWidth}};
    const mountProps = {wrappingComponent, wrappingComponentProps};

    const wrapper = shallow(routeWrapper(<Error404Component />), mountProps);
    expect(wrapper).toBeDefined();
  },
);

test.each(Object.entries(DEVICE_TYPES))(
  'matches snapshot on %p',
  (deviceType: string, deviceWidth: number) => {
    const wrappingComponent = ResponsiveContext.Provider;
    const wrappingComponentProps = {value: {width: deviceWidth}};
    const mountProps = {wrappingComponent, wrappingComponentProps};

    const wrapper = mount(routeWrapper(<Error404Component />), mountProps);
    expect(toJson(wrapper)).toMatchSnapshot();
  },
);
