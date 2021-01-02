import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ENHANCE_YOUR_SKILLS, START_LEARNING_TEXT, HEADER_DESCRIPTION_1, HEADER_DESCRIPTION_2 } from './HeaderStringIds'
import { FACEBOOK_LOGIN, GITHUB_LOGIN, GOOGLE_LOGIN, LOGIN_HEADER_TITLE, GET_STARTED } from '../Login/LoginStringIds'
import './header.css'

const SocialMediaButtons = (cssClass) => {
    return (
        <>
            <div className="lead">
                <a className={cssClass + ' red google button'} href="/auth/google">
                    <i className="google icon"></i>
                    {GOOGLE_LOGIN}
                </a>
            </div>
            <div className="lead">
                <a className={cssClass + ' facebook button'} href="/auth/facebook">
                    <i className="facebook icon"></i>
                    {FACEBOOK_LOGIN}
                </a>
            </div>
            <div className="lead">
                <a className={cssClass + '  black button'} href="/auth/github">
                    <i className="github icon"></i>
                    {GITHUB_LOGIN}
                </a>
            </div>
        </>
    )
}

const HeaderDesktop = () => (
    <div className="header-bg text-light ">
        <Container className="py-5 my-auto">
            <Row>
                <Col className="pr-5 mr-5 my-auto">
                    <div>
                        <h3 className="font-weight-bold pb-2">{ENHANCE_YOUR_SKILLS}</h3>
                        <p className="lead">
                            {HEADER_DESCRIPTION_1} {HEADER_DESCRIPTION_2}
                        </p>
                    </div>
                </Col>
                <Col className="pl-5 ml-5">
                    <div className="form-bg rounded">
                        <h3 className="font-weight-bold pb-3 mx-auto">{GET_STARTED}</h3>
                        <div>{SocialMediaButtons('mx-auto fluid ui mb-4 py-3 ')}</div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
)

export default HeaderDesktop
export { default as HeaderDesktop } from './HeaderDesktop'
