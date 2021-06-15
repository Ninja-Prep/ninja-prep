import {mount, shallow} from 'enzyme';

import {DEVICE_TYPES} from '../TestHelper';
import Header from '../../src/components/Header/HeaderComponent';
import React from 'react';
import {Context as ResponsiveContext} from 'react-responsive';
import toJson from 'enzyme-to-json';

test.each(Object.entries(DEVICE_TYPES))(
  'renders successfully on %p',
  (deviceType: string, deviceWidth: number) => {
    const wrappingComponent = ResponsiveContext.Provider;
    const wrappingComponentProps = {value: {width: deviceWidth}};
    const mountProps = {wrappingComponent, wrappingComponentProps};

    const wrapper = shallow(<Header />, mountProps);
    expect(wrapper).toBeDefined();
  },
);

test.each(Object.entries(DEVICE_TYPES))(
  'matches snapshot on %p',
  (deviceType: string, deviceWidth: number) => {
    const wrappingComponent = ResponsiveContext.Provider;
    const wrappingComponentProps = {value: {width: deviceWidth}};
    const mountProps = {wrappingComponent, wrappingComponentProps};

    const wrapper = mount(<Header />, mountProps);
    expect(toJson(wrapper)).toMatchSnapshot();
  },
);
