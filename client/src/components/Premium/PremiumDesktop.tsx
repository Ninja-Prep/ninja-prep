import React from 'react';

import BenefitsDesktop from './Benefits/BenefitsDesktop';
import PlansDesktop from './Plans/PlansDesktop';
import PremiumFAQDesktop from './PremiumFAQ/PremiumFAQDesktop';
import PremiumHeaderDesktop from './PremiumHeader/PremiumHeaderDesktop';
import './Premium.css';

/**
 *
 */
function PremiumDesktop() {
  return (
    <div className="circles-bg">
      <PremiumHeaderDesktop />
      <PlansDesktop />
      <BenefitsDesktop />
      <PremiumFAQDesktop />
    </div>
  );
}

export default PremiumDesktop;
