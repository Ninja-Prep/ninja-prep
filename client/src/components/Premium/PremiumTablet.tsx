import React from 'react';

import BenefitsTablet from './Benefits/BenefitsTablet';
import PlansTablet from './Plans/PlansTablet';
import PremiumFAQTablet from './PremiumFAQ/PremiumFAQTablet';
import PremiumHeaderTablet from './PremiumHeader/PremiumHeaderTablet';
import './Premium.css';

/**
 * @return {React.ReactNode}
 */
function PremiumTablet(): React.ReactNode {
  return (
    <div className="circles-bg">
      <PremiumHeaderTablet />
      <PlansTablet />
      <BenefitsTablet />
      <PremiumFAQTablet />
    </div>
  );
}

export default PremiumTablet;
