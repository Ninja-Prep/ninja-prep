import React from 'react'
<<<<<<< HEAD
import { Row, Col } from 'react-bootstrap'
=======
import { Container, Row, Col } from 'react-bootstrap'
>>>>>>> d3bc951d0c99c62c1191892653a64856099e8a7a
import { ENHANCE_YOUR_SKILLS, HEADER_DESCRIPTION_1, HEADER_DESCRIPTION_2 } from './HeaderStringIds'
import { FACEBOOK_LOGIN, GITHUB_LOGIN, GOOGLE_LOGIN, GET_STARTED } from '../Login/LoginStringIds'
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

const HeaderMobile = () => (
    <div className="header-bg-mobile">
        <div className="mx-5 header-container-mobile">
            <Row className="">
                <div className="mx-auto text-light">
                    <div className="pb-2">
                        <h3 className="font-weight-bold pb-3 mx-auto text-light">
                            Start learning for free with NinjaPrep
                        </h3>
                        <div>{SocialMediaButtons('mx-auto fluid ui mb-4 py-3 ')}</div>
                    </div>
                </div>
            </Row>
        </div>
    </div>
)

export default HeaderMobile
export { default as HeaderMobile } from './HeaderMobile'
