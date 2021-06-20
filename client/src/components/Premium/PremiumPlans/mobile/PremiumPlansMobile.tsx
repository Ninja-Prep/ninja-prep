import React from 'react';

import PremiumPlanCardContainer from 'containers/PremiumPlanCard/PremiumPlanCard';
import {OUR_PLANS} from 'utils/stringIds.json';

import {PlanCardsList} from '../plans';
import {FlexCardContainer, OurPlansHeader} from './styled';

function PremiumPlansMobile(): JSX.Element {
  return (
    <FlexCardContainer>
      <OurPlansHeader>{OUR_PLANS}</OurPlansHeader>
      {PlanCardsList.plans.map((plan, key) => (
        <PremiumPlanCardContainer
          {...plan}
          key={key}
          url={'/api/payment/create-checkout-session/'}
        />
      ))}
    </FlexCardContainer>
  );
}

export default PremiumPlansMobile;
