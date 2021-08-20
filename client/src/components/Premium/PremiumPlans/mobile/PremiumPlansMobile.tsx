import React from 'react';

import PremiumPlanCardContainer from 'containers/PremiumPlanCard/PremiumPlanCard';
import {OUR_PLANS} from 'utils/stringIds.json';

import {planCards} from 'utils/types/plans/plans';
import {FlexCardContainer, OurPlansHeader} from './styled';

function PremiumPlansMobile(): JSX.Element {
  return (
    <FlexCardContainer>
      <OurPlansHeader>{OUR_PLANS}</OurPlansHeader>
      {planCards.map((plan, key) => (
        <PremiumPlanCardContainer purchasePlan={plan} key={key} />
      ))}
    </FlexCardContainer>
  );
}

export default PremiumPlansMobile;
