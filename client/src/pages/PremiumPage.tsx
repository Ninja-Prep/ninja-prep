import React from 'react';

import Responsiveness from 'utils/hocs/Responsiveness';

import PremiumDesktop from './Premium/PremiumDesktop';
import PremiumMobile from './Premium/PremiumMobile';

const PremiumPage = (): JSX.Element => {
  const desktop = <PremiumDesktop />;
  const mobile = <PremiumMobile />;

  return <Responsiveness desktop={desktop} mobile={mobile} />;
};
export default PremiumPage;
