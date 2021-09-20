import React from 'react';

import JourneyComponent from '../components/Journey/JourneyComponent';
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
      <JourneyComponent />
      <ShowcaseComponent />
    </div>
  );
}

export default LandingPage;
