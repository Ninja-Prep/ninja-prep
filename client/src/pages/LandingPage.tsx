import React from 'react';

import JourneyComponent from '../components/Journey/JourneyComponent';
import ShowcaseComponent from '../components/Showcase/ShowcaseComponent';
import LoginHeader from 'components/LoginHeader/loginHeader';

/**
 *
 */
function LandingPage(): JSX.Element {
  return (
    <div>
      <LoginHeader />
      <JourneyComponent />
      <ShowcaseComponent />
    </div>
  );
}

export default LandingPage;
