/*
Top landing page content for when user visits ninjaprep.io
*/
import React from 'react';

import {Desktop, Tablet, Mobile} from '../../utils/DeviceSizes';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import HeaderTablet from './HeaderTablet';

const HeaderComponent = () => (
  <div>
    <Desktop>
      <HeaderDesktop />
    </Desktop>
    <Tablet>
      <HeaderTablet />
    </Tablet>
    <Mobile>
      <HeaderMobile />
    </Mobile>
  </div>
);

export default HeaderComponent;
