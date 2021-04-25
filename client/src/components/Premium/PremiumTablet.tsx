import React from 'react'
import PremiumHeaderTablet from './PremiumHeader/PremiumHeaderTablet'
import PlansTablet from './Plans/PlansTablet'
import BenefitsTablet from './Benefits/BenefitsTablet'
import PremiumFAQTablet from './PremiumFAQ/PremiumFAQTablet'
import './Premium.css'

function PremiumTablet() {
    return (
        <div className="circles-bg">
            <PremiumHeaderTablet />
            <PlansTablet />
            <BenefitsTablet />
            <PremiumFAQTablet />
        </div>
    )
}

export default PremiumTablet
