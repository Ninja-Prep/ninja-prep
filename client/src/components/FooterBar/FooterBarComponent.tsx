import React from 'react';

import Responsiveness from 'utils/hocs/Responsiveness';

import FooterBarDesktop from './desktop/FooterBarDesktop';
import FooterBarMobile from './mobile/FooterBarMobile';

const desktop = <FooterBarDesktop />;
const mobile = <FooterBarMobile />;

const FooterBarComponent = (): JSX.Element => {
  return <Responsiveness desktop={desktop} mobile={mobile} />;
};

export default FooterBarComponent;
