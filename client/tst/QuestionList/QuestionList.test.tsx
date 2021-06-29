import React from 'react';

import QuestionListComponent from 'containers/QuestionList/QuestionList';
import {mount, shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {Context as ResponsiveContext} from 'react-responsive';

import {DEVICE_TYPES, routeWrapper} from '../TestHelper';

test.each(Object.entries(DEVICE_TYPES))(
  'renders successfully on %p',
  (deviceType: string, deviceWidth: number) => {
    const wrappingComponent = ResponsiveContext.Provider;
    const wrappingComponentProps = {value: {width: deviceWidth}};
    const mountProps = {wrappingComponent, wrappingComponentProps};

    const wrapper = shallow(
      routeWrapper(<QuestionListComponent />),
      mountProps,
    );
    expect(wrapper).toBeDefined();
  },
);

test.each(Object.entries(DEVICE_TYPES))(
  'matches snapshot on %p',
  (deviceType: string, deviceWidth: number) => {
    const wrappingComponent = ResponsiveContext.Provider;
    const wrappingComponentProps = {value: {width: deviceWidth}};
    const mountProps = {wrappingComponent, wrappingComponentProps};

    const wrapper = mount(routeWrapper(<QuestionListComponent />), mountProps);
    expect(toJson(wrapper)).toMatchSnapshot();
  },
);
