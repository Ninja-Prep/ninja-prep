import React from 'react'
import '../premium.css'
import { PREMIUM_HEADER_TITLE, PREMIUM_HEADER_DESCRIPTION } from './PremiumHeaderStringIds'

function PremiumHeaderDesktop() {
    return (
        <div className="py-5 text-center premium-header-bg">
            <img className="w-auto img-fluid pb-4 pt-2" src="/images/NinjaPrep-Logo.png" alt="logo" />
            <h2 className="display-5 pb-2">{PREMIUM_HEADER_TITLE}</h2>
            <p className="text-secondary lead m-auto d-block ">{PREMIUM_HEADER_DESCRIPTION}</p>
        </div>
    )
}

export default PremiumHeaderDesktop
export { default as PremiumHeaderDesktop } from './PremiumHeaderDesktop'
