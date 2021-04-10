import React from 'react'
import { Col, Container } from 'react-bootstrap'
import '../MeetTheTeam.css'
import { ALEX_NGUYEN_PHOTO, ANGELA_SUN_PHOTO, ANGELA_YEUNG_PHOTO, JOANNE_CHEONG_PHOTO } from './MeetTheTeamImages'
import {
    ALEX_NGUYEN,
    ALEX_DESCRIPTION,
    JOANNE_CHEONG,
    JOANNE_DESCRIPTION,
    ANGELA_YEUNG,
    ANGELA_Y_DESCRIPTION,
    ANGELA_SUN,
    ANGELA_S_DESCRIPTION
} from './MeetTheTeamInfoStringIds'

const MeetTheTeamInfoMobile = () => {
    return (
        <Container className="px-5 pt-5 pb-3 w-75">
            <div className="px-5">
                <h1 className="display-5 m-auto py-4 name-text text-center font-weight-bold">{ALEX_NGUYEN}</h1>
                <Col className="pr-5">{ALEX_NGUYEN_PHOTO}</Col>
                <p className="lead pt-3 pb-3 text-secondary">{ALEX_DESCRIPTION}</p>

                <h1 className="display-5 m-auto py-4 name-text text-center font-weight-bold">{JOANNE_CHEONG}</h1>
                <Col className="pr-5">{ANGELA_SUN_PHOTO}</Col>
                <p className="lead pt-3 pb-3 text-secondary">{JOANNE_DESCRIPTION}</p>

                <h1 className="display-5 m-auto py-4 name-text text-center font-weight-bold">{ANGELA_YEUNG}</h1>
                <Col className="pr-5">{ANGELA_YEUNG_PHOTO}</Col>
                <p className="lead pt-3 pb-3 text-secondary">{ANGELA_Y_DESCRIPTION}</p>

                <h1 className="display-5 m-auto py-4 name-text text-center font-weight-bold">{ANGELA_SUN}</h1>
                <Col className="pr-5">{JOANNE_CHEONG_PHOTO}</Col>
                <p className="lead pt-3 pb-3 text-secondary">{ANGELA_S_DESCRIPTION}</p>
            </div>
        </Container>
    )
}

export default MeetTheTeamInfoMobile
