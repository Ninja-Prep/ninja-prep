import React from 'react'
import { MeetTheTeamHeaderDesktop } from './MeetTheTeamHeader/MeetTheTeamHeaderDesktop'
import { MeetTheTeamInfoDesktop } from './MeetTheTeamInfo/MeetTheTeamInfoDesktop'

function MeetTheTeamDesktop() {
    return (
        <div>
            <MeetTheTeamHeaderDesktop />
            <MeetTheTeamInfoDesktop />
        </div>
    )
}

export default MeetTheTeamDesktop
export { default as MeetTheTeamDesktop } from './MeetTheTeamDesktop'
