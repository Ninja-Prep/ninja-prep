import React from 'react'
import FooterBarDesktop from './FooterBarDesktop'
import FooterBarTablet from './FooterBarTablet'
import FooterBarMobile from './FooterBarMobile'
import { Desktop, Tablet, Mobile } from '../../MediaQuery/DeviceSizes'

const FooterBarComponent = () => (
    <div>
        <Desktop>
            <FooterBarDesktop />
        </Desktop>
        <Tablet>
            <FooterBarTablet />
        </Tablet>
        <Mobile>
            <FooterBarMobile />
        </Mobile>
    </div>
)

export default FooterBarComponent
