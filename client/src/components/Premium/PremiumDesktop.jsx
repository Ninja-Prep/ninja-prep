import React from 'react'
import { PremiumHeader } from './PremiumDesktop/PremiumHeader'
import { Plans } from './PremiumDesktop/Plans'
import { Benefits } from './PremiumDesktop/Benefits'
import { FAQ } from './PremiumDesktop/FAQ'

function PremiumDesktop() {
    return (
        <div>
            <PremiumHeader />
            <Plans />
            <Benefits />
            <FAQ />
        </div>
    )
}

export default PremiumDesktop
export { default as PremiumDesktop } from './PremiumDesktop'
