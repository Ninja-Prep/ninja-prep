import React from 'react'
import { DarkNavbarNinjaPrepLogo } from '../../Partials/Logos/NinjaPrepLogos'
import '../premium.css'
import { PREMIUM_HEADER_TITLE, PREMIUM_HEADER_DESCRIPTION } from './PremiumHeaderStringIds'

function PremiumHeaderDesktop() {
    return (
        <div className="py-5 text-center premium-header-bg">
            <div className="pt-4 pb-3">
                <DarkNavbarNinjaPrepLogo height={120} width={460} />
            </div>
            <h3 className="display-5 pb-2">{PREMIUM_HEADER_TITLE}</h3>
            <p className="text-secondary lead m-auto d-block pb-5">{PREMIUM_HEADER_DESCRIPTION}</p>
        </div>
    )
}

export default PremiumHeaderDesktop
