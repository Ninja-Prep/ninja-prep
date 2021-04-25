import React from 'react'
import PremiumComponent from '../../src/components/Premium/PremiumComponent'
import { shallow, mount } from 'enzyme'
import { Context as ResponsiveContext } from 'react-responsive'
import { DEVICE_TYPES, routeWrapper } from '../TestHelper'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import toJson from 'enzyme-to-json'

test.each(Object.entries(DEVICE_TYPES))('renders successfully on %p', (deviceType: string, deviceWidth: number) => {
    const wrappingComponent = ResponsiveContext.Provider
    const wrappingComponentProps = { value: { width: deviceWidth } }
    const mountProps = { wrappingComponent, wrappingComponentProps }
    const stripePromise = loadStripe('mockKey')
    const wrapper = shallow(
        routeWrapper(
            <Elements stripe={stripePromise}>
                <PremiumComponent />
            </Elements>
        ),
        mountProps
    )
    expect(wrapper).toBeDefined
})

test.each(Object.entries(DEVICE_TYPES))('matches snapshot on %p', (deviceType: string, deviceWidth: number) => {
    const wrappingComponent = ResponsiveContext.Provider
    const wrappingComponentProps = { value: { width: deviceWidth } }
    const mountProps = { wrappingComponent, wrappingComponentProps }
    const stripePromise = loadStripe('mockKey')
    const wrapper = mount(
        routeWrapper(
            <Elements stripe={stripePromise}>
                <PremiumComponent />
            </Elements>
        ),
        mountProps
    )
    expect(toJson(wrapper)).toMatchSnapshot()
})
