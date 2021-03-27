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

const MeetTheTeamInfoTablet = (props) => {
    const alexPhoto = <img className="img-fluid rounded" src="/images/ALEX-PHOTO.png" alt="AlexPhoto" />

    const joannePhoto = <img className="img-fluid rounded" src="/images/JOANNE-PHOTO.png" alt="JoannePhoto" />

    const angelaYPhoto = <img className="img-fluid rounded" src="/images/ANGELA-Y-PHOTO.png" alt="AngelaYPhoto" />

    const angelaSPhoto = <img className="img-fluid rounded" src="/images/ANGELA-S-PHOTO.png" alt="AngelaSPhoto" />

    return (
        <Container className="px-5 pt-5 pb-3 w-75">
            <div className="px-5">
                <Row className="pt-3 pb-5">
                    <Col className="pr-2">{alexPhoto}</Col>

                    <Col className="pl-2">
                        <h1 className="display-5 m-auto pb-3 name-text font-weight-bold">{ALEX_NGUYEN}</h1>
                        <p className="lead text-secondary">{ALEX_DESCRIPTION}</p>
                    </Col>
                </Row>

                <Row className="py-5">
                    <Col className="pr-4">
                        <h1 className="display-5 pb-3 name-text font-weight-bold">{JOANNE_CHEONG}</h1>
                        <p className="lead text-secondary">{JOANNE_DESCRIPTION}</p>
                    </Col>

                    <Col className="pl-4">{joannePhoto}</Col>
                </Row>

                <Row className="py-5">
                    <Col className="pr-4">{angelaYPhoto}</Col>

                    <Col className="pl-4">
                        <h1 className="display-5 pb-3 name-text font-weight-bold">{ANGELA_YEUNG}</h1>
                        <p className="lead text-secondary">{ANGELA_Y_DESCRIPTION}</p>
                    </Col>
                </Row>

                <Row className="py-5">
                    <Col className="pr-4">
                        <h1 className="display-5 pb-3 name-text font-weight-bold">{ANGELA_SUN}</h1>
                        <p className="lead text-secondary">{ANGELA_S_DESCRIPTION}</p>
                    </Col>

                    <Col className="pl-5">{angelaSPhoto}</Col>
                </Row>
            </div>
        </Container>
    )
}

export default MeetTheTeamInfoTablet
export { default as MeetTheTeamInfoTablet } from './MeetTheTeamInfoTablet'