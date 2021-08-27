import React from 'react';

import PremiumHeader from 'components/Premium/PremiumHeader/PremiumHeader';
import PremiumPlansMobile from 'components/Premium/PremiumPlans/mobile/PremiumPlansMobile';

const PremiumPage = (): JSX.Element => {
  return (
    <div>
      <PremiumHeader isMobile />
      <PremiumPlansMobile />
    </div>
  );
};
export default PremiumPage;
