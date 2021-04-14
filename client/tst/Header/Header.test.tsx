import React from 'react'
import Header from '../../src/components/Header/HeaderComponent'
import { shallow } from 'enzyme'

it('renders successfully', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toBeDefined
})
