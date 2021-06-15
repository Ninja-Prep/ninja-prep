import {mount, shallow} from 'enzyme';

import {DEVICE_TYPES} from '../TestHelper';
import MeetTheTeamComponent from '../../src/components/MeetTheTeam/MeetTheTeamComponent';
import React from 'react';
import {Context as ResponsiveContext} from 'react-responsive';
import toJson from 'enzyme-to-json';

test.each(Object.entries(DEVICE_TYPES))(
  'renders successfully on %p',
  (deviceType: string, deviceWidth: number) => {
    const wrappingComponent = ResponsiveContext.Provider;
    const wrappingComponentProps = {value: {width: deviceWidth}};
    const mountProps = {wrappingComponent, wrappingComponentProps};

    const wrapper = shallow(<MeetTheTeamComponent />, mountProps);
    expect(wrapper).toBeDefined();
  },
);

test.each(Object.entries(DEVICE_TYPES))(
  'matches snapshot on %p',
  (deviceType: string, deviceWidth: number) => {
    const wrappingComponent = ResponsiveContext.Provider;
    const wrappingComponentProps = {value: {width: deviceWidth}};
    const mountProps = {wrappingComponent, wrappingComponentProps};

    const wrapper = mount(<MeetTheTeamComponent />, mountProps);
    expect(toJson(wrapper)).toMatchSnapshot();
  },
);
