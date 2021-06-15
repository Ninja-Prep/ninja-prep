import React from 'react';

import {Desktop, Tablet, Mobile} from '../../utils/DeviceSizes';
import PremiumDesktop from './PremiumDesktop';
import PremiumMobile from './PremiumMobile';
import PremiumTablet from './PremiumTablet';

const PremiumComponent = () => (
  <div>
    <Desktop>
      <PremiumDesktop />
    </Desktop>
    <Tablet>
      <PremiumTablet />
    </Tablet>
    <Mobile>
      <PremiumMobile />
    </Mobile>
  </div>
);

export default PremiumComponent;
