/*
Landing page section to inform users what ninjaprep.io 
and how it can be helpful for customer
*/

import React from 'react'
import JourneyDesktop from './JourneyDesktop'
import JourneyTablet from './JourneyTablet'
import JourneyMobile from './JourneyMobile'
import { Desktop, Tablet, Mobile } from '../MediaQuery/DeviceSizes'

const JourneyComponent = () => (
    <div>
        <Desktop>
            <JourneyDesktop />
        </Desktop>
        <Tablet>
            <JourneyTablet />
        </Tablet>
        <Mobile>
            <JourneyMobile />
        </Mobile>
    </div>
)

export default JourneyComponent
