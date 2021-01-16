import React from 'react'
import '../premium.css'
import { Container } from 'react-bootstrap'
import { PREMIUM_HEADER_TITLE, PREMIUM_HEADER_DESCRIPTION } from './PremiumHeaderStringIds'

function PremiumHeaderMobile() {
    return (
        <div className="py-5 px-3 text-center premium-header-bg">
            <Container>
                <img className="w-25 img-fluid pb-4 pt-2" src="/images/NinjaPrep-Logo.png" alt="logo" />
                <h3 className="display-5 pb-2">{PREMIUM_HEADER_TITLE}</h3>
                <p className="text-secondary lead m-auto d-block ">{PREMIUM_HEADER_DESCRIPTION}</p>
            </Container>
        </div>
    )
}

export default PremiumHeaderMobile
export { default as PremiumHeaderMobile } from './PremiumHeaderMobile'
