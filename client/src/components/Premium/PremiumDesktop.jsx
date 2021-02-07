import React from 'react'
import { PremiumHeaderDesktop } from './PremiumHeader/PremiumHeaderDesktop'
import { PlansDesktop } from './Plans/PlansDesktop'
import { BenefitsDesktop } from './Benefits/BenefitsDesktop'
import { PremiumFAQDesktop } from './PremiumFAQ/PremiumFAQDesktop'
import './premium.css'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

function PremiumDesktop() {
    const stripePromise = loadStripe(
        'pk_test_51IFPpVD8LTDC9rJz1d5GqoT9IEMvFup6qRVsrORslhqUGRrDWbeGludlqWIDhW9RwrRRUCNlHZ5JCksGo7IOqD5q00JGnjPjA3'
    )

    return (
        <div className="circles-bg">
            <PremiumHeaderDesktop />
            <Elements stripe={stripePromise}>
                <PlansDesktop />
            </Elements>
            <BenefitsDesktop />
            <PremiumFAQDesktop />
        </div>
    )
}

export default PremiumDesktop
export { default as PremiumDesktop } from './PremiumDesktop'
