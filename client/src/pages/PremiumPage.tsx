import React from 'react';

import {PremiumHeader, PremiumPlans} from 'components/Premium';
import {LandingPageBenefits} from 'components/Landing';

const PremiumPage = (): JSX.Element => {
  return (
    <div>
      <PremiumHeader />
      <PremiumPlans />
      <LandingPageBenefits disableCodingButton />
    </div>
  );
};
export default PremiumPage;
