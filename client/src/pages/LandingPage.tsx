import React from 'react';

import HeaderComponent from '../components/Header/HeaderComponent';
import JourneyComponent from '../components/Journey/JourneyComponent';
import ShowcaseComponent from '../components/Showcase/ShowcaseComponent';

/**
 *
 */
function LandingPage(): JSX.Element {
  return (
    <div>
      <HeaderComponent />
      <JourneyComponent />
      <ShowcaseComponent />
    </div>
  );
}

export default LandingPage;
