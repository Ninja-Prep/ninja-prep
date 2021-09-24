import React from 'react';

import LandingPageJourney from 'components/LandingPageJourney/LandingPageJourney';
import LandingPageBenefits from 'components/LandingPageBenefits/LandingPageBenefits';
import LoginHeader from 'components/LoginHeader/loginHeader';
import WhyNinjaPrep from 'components/WhyNinjaPrep/WhyNinjaPrep';

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
