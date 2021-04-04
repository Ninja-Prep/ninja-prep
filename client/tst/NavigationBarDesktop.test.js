import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import NavigationBarDesktop from '../src/components/Partials/NavigationBar/NavigationBarDesktop.jsx'
import {SIGN_IN_NAVIGATION} from '../src/components/Partials/NavigationBar/NavigationBarStringIds'

Enzyme.configure({ adapter: new Adapter() });

it('renders Sign Out in NavBar when user is logged in', ()=>{
    const NavBar = Enzyme.mount(<Router> < NavigationBarDesktop /> </Router>)
    expect(NavBar.find(NavigationBarDesktop).find('.Sign-out-Test').first().text()).toEqual(SIGN_IN_NAVIGATION)
})