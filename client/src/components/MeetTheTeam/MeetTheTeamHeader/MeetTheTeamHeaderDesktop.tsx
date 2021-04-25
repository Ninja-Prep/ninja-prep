import React from 'react'
import '../meettheteam.css'
import {
    MEET_THE_TEAM_HEADER_TITLE,
    MEET_THE_TEAM_HEADER_DESCRIPTION_1,
    MEET_THE_TEAM_HEADER_DESCRIPTION_2
} from './MeetTheTeamHeaderStringIds'

function MeetTheTeamHeaderDesktop() {
    return (
        <div className="py-5 text-center meet-the-team-header-bg">
            <img className="w-auto img-fluid pt-3 pb-4" src="/images/NinjaPrep-Logo.png" alt="logo" />
            <h1 className="display-5 font-weight-bold pb-2">{MEET_THE_TEAM_HEADER_TITLE}</h1>
            <p className="text-secondary lead m-auto d-block">{MEET_THE_TEAM_HEADER_DESCRIPTION_1}</p>
            <p className="text-secondary lead m-auto d-block pb-4">{MEET_THE_TEAM_HEADER_DESCRIPTION_2}</p>
        </div>
    )
}

export default MeetTheTeamHeaderDesktop
