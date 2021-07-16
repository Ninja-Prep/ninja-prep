import React from 'react';

import PremiumHeader from 'components/Premium/PremiumHeader/PremiumHeader';
import PremiumPlansDesktop from 'components/Premium/PremiumPlans/desktop/PremiumPlansDesktop';

const PremiumPage = (): JSX.Element => {
  return (
    <div>
      <PremiumHeader />
      <PremiumPlansDesktop />
    </div>
  );
};
export default PremiumPage;
