import React from 'react'
import FeaturedCard from '../../src/components/Featured/FeaturedCard'
import { shallow } from 'enzyme'

it('renders successfully', () => {
    const wrapper = shallow(<FeaturedCard discoverCardImgPath="" discoverCardTitle="" />)
    expect(wrapper).toBeDefined
})
