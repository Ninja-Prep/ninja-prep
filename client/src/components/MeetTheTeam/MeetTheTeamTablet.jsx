import React from 'react'
import { MeetTheTeamHeaderTablet } from './MeetTheTeamHeader/MeetTheTeamHeaderTablet'
import { MeetTheTeamInfoTablet } from './MeetTheTeamInfo/MeetTheTeamInfoTablet'

function MeetTheTeamTablet() {
    return (
        <div>
            <MeetTheTeamHeaderTablet />
            <MeetTheTeamInfoTablet />
        </div>
    )
}

export default MeetTheTeamTablet
export { default as MeetTheTeamTablet } from './MeetTheTeamTablet'
