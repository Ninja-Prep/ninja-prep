import React from 'react';

import JourneyComponent from '../components/Journey/JourneyComponent';
import ShowcaseComponent from '../components/Showcase/ShowcaseComponent';

/**
 *
 */
function LandingPage(): JSX.Element {
  return (
    <div>
      <JourneyComponent />
      <ShowcaseComponent />
    </div>
  );
}

export default LandingPage;
