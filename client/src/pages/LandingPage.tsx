import React from 'react';

import HeaderComponent from '../components/Header/HeaderComponent';
import JourneyComponent from '../components/Journey/JourneyComponent';
import BenefitsDesktop from '../components/PremiumBenefits/BenefitsDesktop';
import CTADesktop from '../components/CTA/CTADesktop';

/**
 *
 */
function LandingPage(): JSX.Element {
  return (
    <div>
      <HeaderComponent />
      <JourneyComponent />
      <BenefitsDesktop />
      <CTADesktop />
    </div>
  );
}

export default LandingPage;
