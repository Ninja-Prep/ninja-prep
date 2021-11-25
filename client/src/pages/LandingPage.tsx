import React from 'react';

import {LandingPageJourney, LandingPageBenefits, WhyNinjaPrep} from 'components/Landing';
import {LoginHeader} from 'components/Login';

/**
 *
 */
function LandingPage(): JSX.Element {
  return (
    <div>
      <LoginHeader />
      <WhyNinjaPrep />
      <LandingPageJourney />
      <LandingPageBenefits />
    </div>
  );
}

export default LandingPage;
