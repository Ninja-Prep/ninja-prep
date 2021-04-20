import React from 'react'
import '../MeetTheTeam.css'
import { Container } from 'react-bootstrap'
import { MEET_THE_TEAM_HEADER_TITLE, MEET_THE_TEAM_HEADER_DESCRIPTION } from './MeetTheTeamHeaderStringIds'

function MeetTheTeamHeaderMobile() {
    return (
        <div className="py-5 px-3 text-center meet-the-team-header-bg">
            <Container>
                <img className="w-25 img-fluid pt-3 pb-4" src="/images/NinjaPrep-Logo.png" alt="logo" />
                <h1 className="display-5 font-weight-bold pb-2">{MEET_THE_TEAM_HEADER_TITLE}</h1>
                <p className="text-secondary lead m-auto d-block pb-4">{MEET_THE_TEAM_HEADER_DESCRIPTION}</p>
            </Container>
        </div>
    )
}

export default MeetTheTeamHeaderMobile
