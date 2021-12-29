import React from 'react';

import LoginHeaderMobile from 'components/Login/mobile/LoginHeader/LoginHeaderMobile';
import WhyNinjaPrepMobile from 'components/Landing/mobile/WhyNinjaPrep/WhyNinjaPrepMobile';
import LandingPageJourneyMobile from 'components/Landing/mobile/LandingPageJourney/LandingPageJourneyMobile';
import LandingPageBenefitsMobile from 'components/Landing/mobile/LandingPageBenefits/LandingPageBenefitsMobile';

function LandingPageMobile(): JSX.Element {
  return (
    <div>
      <LoginHeaderMobile />
      <WhyNinjaPrepMobile />
      <LandingPageJourneyMobile />
      <LandingPageBenefitsMobile />
    </div>
  );
}

export default LandingPageMobile;
