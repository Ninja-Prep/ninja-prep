import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './meettheteam.css'
import {
	ALEX_NGUYEN,
	ALEX_DESCRIPTION,
    JOANNE_CHEONG,
    JOANNE_DESCRIPTION,
    ANGELA_YEUNG,
    ANGELA_Y_DESCRIPTION,
    ANGELA_SUN,
    ANGELA_S_DESCRIPTION
} from './MeetTheTeamStringIds'

const MeetTheTeamTablet = (props) => {
    return(
        <div className="text-center px-5 pt-5 pb-3 container">

            <Row className="pt-3 pb-5">
                <Col className="my-auto">
                    <img
                    className="img-fluid w-75"
                    src="/images/Photo-Alex.png"
                    alt="AlexPhoto"
                    />
                </Col>

                <Col className="my-auto">
                    <h1 className="display-5 w-100 py-4 m-auto name-text font-weight-bold">{ALEX_NGUYEN}</h1>
                    <p className="lead text-secondary w-100 m-auto">
					{ALEX_DESCRIPTION}
				    </p>
                </Col>
            </Row>

            <Row className="py-5">
                <Col className="my-auto">
                    <h1 className="display-5 w-100 py-4 m-auto name-text font-weight-bold">{JOANNE_CHEONG}</h1>
                    <p className="lead text-secondary w-100 m-auto">
					{JOANNE_DESCRIPTION}
				    </p>
                </Col>

                <Col className="my-auto">
                    <img
                    className="img-fluid w-75"
                    src="/images/Photo-Joanne.png"
                    alt="JoannePhoto"
                    />
                </Col>
            </Row>

            <Row className="py-5">
                <Col className="my-auto">
                    <img
                    className="img-fluid w-75"
                    src="/images/Photo-Angela-Y.png"
                    alt="AngelaYPhoto"
                    />
                </Col>

                <Col className="my-auto">
                    <h1 className="display-5 w-100 py-4 m-auto name-text font-weight-bold">{ANGELA_YEUNG}</h1>
                    <p className="lead text-secondary w-100 m-auto">
					{ANGELA_Y_DESCRIPTION}
				    </p>
                </Col>
            </Row>

            <Row className="py-5">
                <Col className="my-auto">
                    <h1 className="display-5 w-100 py-4 m-auto name-text font-weight-bold">{ANGELA_SUN}</h1>
                    <p className="lead text-secondary w-100 m-auto">
					{ANGELA_S_DESCRIPTION}
				    </p>
                </Col>

                <Col className="my-auto">
                    <img
                    className="img-fluid w-75"
                    src="/images/Photo-Angela-S.png"
                    alt="AngelaSPhoto"
                    />
                </Col>
            </Row>
            
        </div>
    )
    }

export default MeetTheTeamTablet
export { default as MeetTheTeamTablet } from './MeetTheTeamTablet'