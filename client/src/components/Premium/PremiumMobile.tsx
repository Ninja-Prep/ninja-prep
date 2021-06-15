import React from 'react';

import BenefitsMobile from './Benefits/BenefitsMobile';
import PlansMobile from './Plans/PlansMobile';
import PremiumFAQMobile from './PremiumFAQ/PremiumFAQMobile';
import PremiumHeaderMobile from './PremiumHeader/PremiumHeaderMobile';

/**
 *
 */
function PremiumMobile() {
  return (
    <div>
      <PremiumHeaderMobile />
      <PlansMobile />
      <BenefitsMobile />
      <PremiumFAQMobile />
    </div>
  );
}

export default PremiumMobile;
