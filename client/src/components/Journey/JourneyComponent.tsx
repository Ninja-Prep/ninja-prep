/*
Landing page section to inform users what ninjaprep.io
and how it can be helpful for customer
*/

import React from 'react';

import {Desktop, Tablet, Mobile} from '../../utils/DeviceSizes';
import JourneyDesktop from './JourneyDesktop';
import JourneyMobile from './JourneyMobile';
import JourneyTablet from './JourneyTablet';

const JourneyComponent = () => (
  <div>
    <Desktop>
      <JourneyDesktop />
    </Desktop>
    <Tablet>
      <JourneyTablet />
    </Tablet>
    <Mobile>
      <JourneyMobile />
    </Mobile>
  </div>
);

export default JourneyComponent;
