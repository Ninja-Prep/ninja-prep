import React from 'react'
import FeaturedCard from '../../src/components/Featured/FeaturedCard'
import { shallow, mount } from 'enzyme'
import { Context as ResponsiveContext } from 'react-responsive'
import { DEVICE_TYPES, routeWrapper } from '../TestHelper'
import toJson from 'enzyme-to-json'

test.each(Object.entries(DEVICE_TYPES))('renders successfully on %p', (deviceType: string, deviceWidth: number) => {
    const wrappingComponent = ResponsiveContext.Provider
    const wrappingComponentProps = { value: { width: deviceWidth } }
    const mountProps = { wrappingComponent, wrappingComponentProps }

    const wrapper = shallow(routeWrapper(<FeaturedCard discoverCardImgPath="" discoverCardTitle="" />), mountProps)
    expect(wrapper).toBeDefined
})

test.each(Object.entries(DEVICE_TYPES))('matches snapshot on %p', (deviceType: string, deviceWidth: number) => {
    const wrappingComponent = ResponsiveContext.Provider
    const wrappingComponentProps = { value: { width: deviceWidth } }
    const mountProps = { wrappingComponent, wrappingComponentProps }

    const wrapper = mount(routeWrapper(<FeaturedCard discoverCardImgPath="" discoverCardTitle="" />), mountProps)
    expect(toJson(wrapper)).toMatchSnapshot()
})
