import React from 'react';

import PremiumPlanCardContainer from 'containers/PremiumPlanCard/PremiumPlanCard';
import {Container, CardDeck} from 'react-bootstrap';
import {OUR_PLANS} from 'utils/stringIds.json';

import {PlanCardsList} from '../plans';
import {OurPlansHeader} from './styled';

/**
 *
 */
function PremiumPlansDesktop(): JSX.Element {
  return (
    <div>
      <OurPlansHeader>{OUR_PLANS}</OurPlansHeader>
      <Container>
        <CardDeck>
          {PlanCardsList.plans.map((plan, key) => (
            <PremiumPlanCardContainer
              {...plan}
              key={key}
              url={'/api/payment/create-checkout-session/'}
            />
          ))}
        </CardDeck>
      </Container>
    </div>
  );
}

export default PremiumPlansDesktop;
