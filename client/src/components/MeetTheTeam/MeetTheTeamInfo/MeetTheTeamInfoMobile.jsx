import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import '../meettheteam.css'
import {
    ALEX_NGUYEN,
    ALEX_DESCRIPTION,
    JOANNE_CHEONG,
    JOANNE_DESCRIPTION,
    ANGELA_YEUNG,
    ANGELA_Y_DESCRIPTION,
    ANGELA_SUN,
    ANGELA_S_DESCRIPTION,
} from './MeetTheTeamInfoStringIds'

const MeetTheTeamInfoMobile = (props) => {
    const alexPhoto = <img className="img-fluid rounded" src="/images/ALEX-PHOTO.png" alt="AlexPhoto" />

    const joannePhoto = <img className="img-fluid rounded" src="/images/JOANNE-PHOTO.png" alt="JoannePhoto" />

    const angelaYPhoto = <img className="img-fluid rounded" src="/images/ANGELA-Y-PHOTO.png" alt="AngelaYPhoto" />

    const angelaSPhoto = <img className="img-fluid rounded" src="/images/ANGELA-S-PHOTO.png" alt="AngelaSPhoto" />

    return (
        <Container className="px-5 pt-5 pb-3 w-75">
            <div className="px-5">
                <h1 className="display-5 m-auto py-4 name-text text-center font-weight-bold">{ALEX_NGUYEN}</h1>
                <Col className="pr-5">{alexPhoto}</Col>
                <p className="lead pt-3 pb-3 text-secondary">{ALEX_DESCRIPTION}</p>

                <h1 className="display-5 m-auto py-4 name-text text-center font-weight-bold">{JOANNE_CHEONG}</h1>
                <Col className="pr-5">{joannePhoto}</Col>
                <p className="lead pt-3 pb-3 text-secondary">{JOANNE_DESCRIPTION}</p>

                <h1 className="display-5 m-auto py-4 name-text text-center font-weight-bold">{ANGELA_YEUNG}</h1>
                <Col className="pr-5">{angelaYPhoto}</Col>
                <p className="lead pt-3 pb-3 text-secondary">{ANGELA_Y_DESCRIPTION}</p>

                <h1 className="display-5 m-auto py-4 name-text text-center font-weight-bold">{ANGELA_SUN}</h1>
                <Col className="pr-5">{angelaSPhoto}</Col>
                <p className="lead pt-3 pb-3 text-secondary">{ANGELA_S_DESCRIPTION}</p>
            </div>
        </Container>
    )
}

export default MeetTheTeamInfoMobile
export { default as MeetTheTeamInfoMobile } from './MeetTheTeamInfoMobile'