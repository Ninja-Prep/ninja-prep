import * as React from 'react';

import PremiumPlanCardContainer from '../containers/PremiumPlanCard/PremiumPlanCardContainer';

import {OUR_PLANS} from 'utils/stringIds.json';
import {planCards} from 'utils/types/plans/plans';
import {Card, CardContainer, Container, OurPlansHeader} from './styled';

function PremiumPlans(): JSX.Element {
  return (
    <Container>
      <OurPlansHeader>{OUR_PLANS}</OurPlansHeader>
      <CardContainer>
        {planCards.map((plan, key) => (
          <Card>
            <PremiumPlanCardContainer purchasePlan={plan} key={key} />
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
}

export default PremiumPlans;