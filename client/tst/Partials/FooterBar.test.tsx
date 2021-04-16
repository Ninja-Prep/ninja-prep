import React from 'react'
import { shallow, mount } from 'enzyme'
import { Context as ResponsiveContext } from 'react-responsive'
import { DEVICE_TYPES, routeWrapper } from '../TestHelper'
import toJson from 'enzyme-to-json'
import FooterBarComponent from '../../src/components/Partials/FooterBar/FooterBarComponent'

test.each(Object.entries(DEVICE_TYPES))('renders successfully on %p', (deviceType: string, deviceWidth: number) => {
    const wrappingComponent = ResponsiveContext.Provider
    const wrappingComponentProps = { value: { width: deviceWidth } }
    const mountProps = { wrappingComponent, wrappingComponentProps }

    const wrapper = shallow(routeWrapper(<FooterBarComponent />), mountProps)
    expect(wrapper).toBeDefined
})

test.each(Object.entries(DEVICE_TYPES))('matches snapshot on %p', (deviceType: string, deviceWidth: number) => {
    const wrappingComponent = ResponsiveContext.Provider
    const wrappingComponentProps = { value: { width: deviceWidth } }
    const mountProps = { wrappingComponent, wrappingComponentProps }

    const wrapper = mount(routeWrapper(<FooterBarComponent />), mountProps)
    expect(toJson(wrapper)).toMatchSnapshot()
})
