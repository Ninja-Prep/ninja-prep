/*
Top landing page content for when user visits ninjaprep.io
*/
import React from 'react'
import HeaderDesktop from './HeaderDesktop'
import HeaderTablet from './HeaderTablet'
import HeaderMobile from './HeaderMobile'
import { Desktop, Tablet, Mobile } from '../MediaQuery/DeviceSizes'

const HeaderComponent = () => (
    <div>
        <Desktop>
            <HeaderDesktop />
        </Desktop>
        <Tablet>
            <HeaderTablet />
        </Tablet>
        <Mobile>
            <HeaderMobile />
        </Mobile>
    </div>
)

export default HeaderComponent
