import React from 'react';

import PremiumHeader from 'components/Premium/PremiumHeader/PremiumHeader';
import PremiumPlansDesktop from 'components/Premium/PremiumPlans/desktop/PremiumPlansDesktop';
import LandingPageBenefits from 'components/LandingPageBenefits/LandingPageBenefits';

const PremiumPage = (): JSX.Element => {
  return (
    <div>
      <PremiumHeader />
      <PremiumPlansDesktop />
      <LandingPageBenefits disableCodingButton />
    </div>
  );
};
export default PremiumPage;
