import React from 'react'
import PremiumDesktop from './PremiumDesktop'
import PremiumTablet from './PremiumTablet'
import PremiumMobile from './PremiumMobile'
import { Desktop, Tablet, Mobile } from '../MediaQuery/DeviceSizes'

const PremiumComponent = () => (
    <div>
        <Desktop>
            <PremiumDesktop />
        </Desktop>
        <Tablet>
            <PremiumTablet />
        </Tablet>
        <Mobile>
            <PremiumMobile />
        </Mobile>
    </div>
)

export default PremiumComponent
