import React from 'react';

import {mount} from 'enzyme';
import {Context as ResponsiveContext} from 'react-responsive';
import {Default, Desktop, Mobile, Tablet} from 'utils/DeviceSizes';

it('renders successfully on desktop', () => {
  const wrappingComponent = ResponsiveContext.Provider;
  const wrappingComponentProps = {value: {width: 1000}};
  const mountProps = {wrappingComponent, wrappingComponentProps};

  const wrapper = mount(
    <Desktop>
      <div></div>
    </Desktop>,
    mountProps,
  );
  expect(wrapper).toBeDefined();
});

it('renders successfully on mobile', () => {
  const wrappingComponent = ResponsiveContext.Provider;
  const wrappingComponentProps = {value: {width: 500}};
  const mountProps = {wrappingComponent, wrappingComponentProps};

  const wrapper = mount(
    <Mobile>
      <div></div>
    </Mobile>,
    mountProps,
  );
  expect(wrapper).toBeDefined();
});

it('renders successfully on tablet', () => {
  const wrappingComponent = ResponsiveContext.Provider;
  const wrappingComponentProps = {value: {width: 765}};
  const mountProps = {wrappingComponent, wrappingComponentProps};

  const wrapper = mount(
    <Tablet>
      <div></div>
    </Tablet>,
    mountProps,
  );
  expect(wrapper).toBeDefined();
});

it('renders successfully on default', () => {
  const wrapper = mount(
    <Default>
      <div></div>
    </Default>,
  );
  expect(wrapper).not.toBeNull();
});

it('renders successfully on default with null', () => {
  const wrapper = mount(<Default>{null}</Default>);
  expect(wrapper).toBeTruthy();
});
