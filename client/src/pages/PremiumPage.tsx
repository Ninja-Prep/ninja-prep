import React from 'react';

import Responsiveness from 'utils/hocs/Responsiveness';

import PremiumDesktop from './desktop/PremiumDesktop';
import PremiumMobile from './mobile/PremiumMobile';

const PremiumPage = (): JSX.Element => {
  const desktop = <PremiumDesktop />;
  const mobile = <PremiumMobile />;

  return <Responsiveness desktop={desktop} mobile={mobile} />;
};
export default PremiumPage;
