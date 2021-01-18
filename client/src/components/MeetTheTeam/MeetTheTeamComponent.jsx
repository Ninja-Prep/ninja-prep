import React from 'react'
import { MeetTheTeamDesktop } from './MeetTheTeamDesktop'
import { MeetTheTeamTablet } from './MeetTheTeamTablet'
import { MeetTheTeamMobile } from './MeetTheTeamMobile'
import { Desktop, Tablet, Mobile } from '../MediaQuery/DeviceSizes'

const MeetTheTeamComponent = () => (
    <div>
        <Desktop>
            <MeetTheTeamDesktop />
        </Desktop>
        <Tablet>
            <MeetTheTeamTablet />
        </Tablet>
        <Mobile>
            <MeetTheTeamMobile />
        </Mobile>
    </div>
)

export default MeetTheTeamComponent
export { default as MeetTheTeamComponent } from './MeetTheTeamComponent'
