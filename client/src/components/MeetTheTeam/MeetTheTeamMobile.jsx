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

const MeetTheTeamMobile = (props) => {
    return(
    <div className="text-center px-5 pt-5 container">

            <Row className="pt-3 pb-3">
                <Col className="my-auto py-4 col-12">
                    <h1 className="display-5 w-75 m-auto name-text font-weight-bold">{ALEX_NGUYEN}</h1>
                </Col>

                <Col className="my-auto py-4 col-12">
                    <img
                    className="img-fluid w-50"
                    src="/images/Photo-Alex.png"
                    alt="AlexPhoto"
                    />
                </Col>

                <Col className="my-auto col-12">
                    <p className="lead text-secondary w-75 m-auto">
					{ALEX_DESCRIPTION}
				    </p>
                </Col>
            </Row>

            <Row className="py-5">
                <Col className="my-auto py-4 col-12">
                    <h1 className="display-5 w-75 m-auto name-text font-weight-bold">{JOANNE_CHEONG}</h1>
                </Col>

                <Col className="my-auto py-4 col-12">
                    <img
                    className="img-fluid w-50"
                    src="/images/Photo-Joanne.png"
                    alt="JoannePhoto"
                    />
                </Col>

                <Col className="my-auto col-12">                    
                    <p className="lead text-secondary w-75 m-auto">
					{JOANNE_DESCRIPTION}
				    </p>
                </Col>
            </Row>

            <Row className="py-5">
                <Col className="my-auto py-4 col-12">
                    <h1 className="display-5 w-75 m-auto name-text font-weight-bold">{ANGELA_YEUNG}</h1>
                </Col>

                <Col className="my-auto py-4 col-12">
                    <img
                    className="img-fluid w-50"
                    src="/images/Photo-Angela-Y.png"
                    alt="AngelaYPhoto"
                    />
                </Col>

                <Col className="my-auto col-12">                    
                    <p className="lead text-secondary w-75 m-auto">
					{ANGELA_Y_DESCRIPTION}
				    </p>
                </Col>
            </Row>

            <Row className="py-5">
                <Col className="my-auto py-4 col-12">
                    <h1 className="display-5 w-75 m-auto name-text font-weight-bold">{ANGELA_SUN}</h1>
                </Col>

                <Col className="my-auto py-4 col-12">
                    <img
                    className="img-fluid w-50"
                    src="/images/Photo-Angela-S.png"
                    alt="AngelaSPhoto"
                    />
                </Col>

                <Col className="my-auto col-12">
                    <p className="lead text-secondary w-75 m-auto">
					{ANGELA_S_DESCRIPTION}
				    </p>
                </Col>
            </Row>
            
        </div>
)
}

export default MeetTheTeamMobile
export { default as MeetTheTeamMobile} from './MeetTheTeamMobile'