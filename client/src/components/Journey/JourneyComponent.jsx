import React from 'react'
import { JourneyDesktop } from './JourneyDesktop'
import { Desktop, Tablet, Mobile } from '../MediaQuery/DeviceSizes'

const JourneyComponent = () => (
    <div>
        <Desktop>
            <JourneyDesktop />
        </Desktop>
        <Tablet></Tablet>
        <Mobile></Mobile>
    </div>
)

export default JourneyComponent
export { default as JourneyComponent } from './JourneyComponent'
