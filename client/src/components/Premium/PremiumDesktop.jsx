import React from 'react'
import { PremiumHeaderDesktop } from './PremiumHeader/PremiumHeaderDesktop'
import { PlansDesktop } from './Plans/PlansDesktop'
import { BenefitsDesktop } from './Benefits/BenefitsDesktop'
import { PremiumFAQDesktop } from './PremiumFAQ/PremiumFAQDesktop'
import './premium.css'

function PremiumDesktop() {
    return (
        <div className="circles-bg">
            <PremiumHeaderDesktop />
            <PlansDesktop />
            <BenefitsDesktop />
            <PremiumFAQDesktop />
        </div>
    )
}

export default PremiumDesktop
export { default as PremiumDesktop } from './PremiumDesktop'
