import React from 'react'
import '../premium.css'
import { HEADER_TITLE, HEADER_DESCRIPTION } from './PremiumHeaderStringIds'

function PremiumHeaderDesktop() {
    return (
        <div className="py-5 text-center header-bg">
            <img className="w-auto pb-4 pt-2" src="/images/NinjaPrep-Logo.png" alt="logo" />
            <h2 className="display-5 pb-2">{HEADER_TITLE}</h2>
            <span className="text-secondary lead m-auto d-block ">{HEADER_DESCRIPTION}</span>
        </div>
    )
}

export default PremiumHeaderDesktop
export { default as PremiumHeaderDesktop } from './PremiumHeaderDesktop'
