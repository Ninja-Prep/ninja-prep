import * as React from 'react';

import PremiumPlanCardContainer from '../containers/PremiumPlanCard/PremiumPlanCardContainer';

import {OUR_PLANS} from 'utils/stringIds.json';
import {planCards} from 'utils/types/plans/plans';
import {Card, CardContainer} from './styled';
import {HeadingFont} from 'uiLibrary/Fonts';

function PremiumPlans(): JSX.Element {
  return (
    <div>
      <HeadingFont>{OUR_PLANS}</HeadingFont>
      <CardContainer>
        {planCards.map((plan, key) => (
          <Card>
            <PremiumPlanCardContainer purchasePlan={plan} key={key} />
          </Card>
        ))}
      </CardContainer>
    </div>
  );
}

export default PremiumPlans;
