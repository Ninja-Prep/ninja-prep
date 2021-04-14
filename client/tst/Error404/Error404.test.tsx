import React from 'react'
import Error404Component from '../../src/components/Error404/Error404Component'
import { shallow } from 'enzyme'

it('renders successfully', () => {
    const wrapper = shallow(<Error404Component />)
    expect(wrapper).toBeDefined
})
