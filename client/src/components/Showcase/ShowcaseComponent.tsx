/*
Call to action text component for customer to get involved in NinjaPrep.io
*/
import React from 'react';

import {Desktop, Tablet, Mobile} from '../../utils/DeviceSizes';
import ShowcaseDesktop from './ShowcaseDesktop';
import ShowcaseMobile from './ShowcaseMobile';
import ShowcaseTablet from './ShowcaseTablet';

const ShowcaseComponent = () => (
  <div>
    <Desktop>
      <ShowcaseDesktop />
    </Desktop>
    <Tablet>
      <ShowcaseTablet />
    </Tablet>
    <Mobile>
      <ShowcaseMobile />
    </Mobile>
  </div>
);

export default ShowcaseComponent;
