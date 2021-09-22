import React from 'react';

import LandingPageJourney from '../components/LandingPageJourney/LandingPageJourney';
import ShowcaseComponent from '../components/Showcase/ShowcaseComponent';
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
      <ShowcaseComponent />
    </div>
  );
}

export default LandingPage;
