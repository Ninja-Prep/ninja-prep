import React from 'react'
import PremiumHeaderMobile from './PremiumHeader/PremiumHeaderMobile'
import PlansMobile from './Plans/PlansMobile'
import BenefitsMobile from './Benefits/BenefitsMobile'
import PremiumFAQMobile from './PremiumFAQ/PremiumFAQMobile'

function PremiumMobile() {
    return (
        <div>
            <PremiumHeaderMobile />
            <PlansMobile />
            <BenefitsMobile />
            <PremiumFAQMobile />
        </div>
    )
}

export default PremiumMobile
