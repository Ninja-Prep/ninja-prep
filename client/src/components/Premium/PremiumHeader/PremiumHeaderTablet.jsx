import React from 'react'
import '../premium.css'
import { Container } from 'react-bootstrap'
import { PREMIUM_HEADER_TITLE, PREMIUM_HEADER_DESCRIPTION } from './PremiumHeaderStringIds'

function PremiumHeaderTablet() {
    return (
        <div className="py-5 text-center premium-header-bg">
            <Container>
                <img className="img-fluid pb-4 pt-2" src="/images/NinjaPrep-Logo.png" alt="logo" />
                <h2 className="display-5 pb-2">{PREMIUM_HEADER_TITLE}</h2>
                <p className="text-secondary lead m-auto d-block ">{PREMIUM_HEADER_DESCRIPTION}</p>
            </Container>
        </div>
    )
}

export default PremiumHeaderTablet
export { default as PremiumHeaderTablet } from './PremiumHeaderTablet'
