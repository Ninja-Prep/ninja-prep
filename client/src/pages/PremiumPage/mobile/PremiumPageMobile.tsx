import React from 'react';

import {PremiumHeader} from 'components/Premium';
import PremiumPlansMobile from 'components/Premium/mobile/PremiumPlans/PremiumPlansMobile';
import LandingPageBenefitsMobile from 'components/Landing/mobile/LandingPageBenefits/LandingPageBenefitsMobile';

const PremiumPageMobile = (): JSX.Element => {
  return (
    <div>
      <PremiumHeader isMobile />
      <PremiumPlansMobile />
      <LandingPageBenefitsMobile disableCodingButton />
    </div>
  );
};
export default PremiumPageMobile;
