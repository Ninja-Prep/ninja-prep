import React from 'react';

import {Desktop, Tablet, Mobile} from '../../../utils/DeviceSizes';
import FooterBarDesktop from './FooterBarDesktop';
import FooterBarMobile from './FooterBarMobile';
import FooterBarTablet from './FooterBarTablet';

const FooterBarComponent = () => (
  <div>
    <Desktop>
      <FooterBarDesktop />
    </Desktop>
    <Tablet>
      <FooterBarTablet />
    </Tablet>
    <Mobile>
      <FooterBarMobile />
    </Mobile>
  </div>
);

export default FooterBarComponent;
