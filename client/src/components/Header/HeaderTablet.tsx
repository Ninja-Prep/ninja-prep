import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ENHANCE_YOUR_SKILLS, HEADER_DESCRIPTION_1, HEADER_DESCRIPTION_2 } from './HeaderStringIds'
import { GET_STARTED } from '../Login/LoginStringIds'
import './header.css'
import SocialMediaButtons from '../Login/SocialMediaButtons'

const HeaderTablet = () => (
    <div className="header-bg text-light">
        <Container className="header-container px-5">
            <Row>
                <Col className="my-auto pr-4 pl-0">
                    <div>
                        <h3 className="font-weight-bold pb-2">{ENHANCE_YOUR_SKILLS}</h3>
                        <p className="lead">
                            {HEADER_DESCRIPTION_1} {HEADER_DESCRIPTION_2}
                        </p>
                    </div>
                </Col>
                <Col className="pl-3 pr-0">
                    <div className="form-bg rounded">
                        <div className="pt-4 pb-2 px-5">
                            <h4 className="font-weight-bold pb-3 mx-auto text-light">{GET_STARTED}</h4>
                            <div>{SocialMediaButtons('mx-auto fluid ui mb-4 py-3 ')}</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
)

export default HeaderTablet
