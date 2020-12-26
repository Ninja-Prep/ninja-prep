import React from 'react'
import { Row, Col } from 'react-bootstrap'
import {
    FACEBOOK_LOGIN,
    GITHUB_LOGIN,
    GOOGLE_LOGIN,
    LOGIN_HEADER_TITLE,
    GET_STARTED,
} from './LoginStringIds'

const SocialMediaButtons = (cssClass) => {
    return (
        <>
            <div className="lead">
                <a
                    className={cssClass + ' red google button'}
                    href="/auth/google"
                >
                    <i className="google icon"></i>
                    {GOOGLE_LOGIN}
                </a>
            </div>
            <div className="lead">
                <a
                    className={cssClass + ' facebook button'}
                    href="/auth/facebook"
                >
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

const LoginDesktop = () => (
    <div className="py-auto px-5">
        <Row className="py-5 px-0 mx-auto container h-100">
            <Col className="pl-0 pr-5 ">
                <img
                    className="pt-3 pr-5"
                    src="./images/coursePreview.png"
                    alt="Placeholder"
                />
                <h2 className="display-5 font-weight-bold pb-2 pt-2 pr-3">
                    {LOGIN_HEADER_TITLE}
                </h2>
            </Col>
            <Col className="px-0 col-5">
                <div>
                    <div className="py-5">
                        <h3 className="font-weight-bold pb-4 mx-auto">
                            {GET_STARTED}
                        </h3>
                        <div>
                            {SocialMediaButtons('mx-auto fluid ui mb-4 py-3 ')}
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
)

export default LoginDesktop
export { default as LoginDesktop } from './LoginDesktop'
