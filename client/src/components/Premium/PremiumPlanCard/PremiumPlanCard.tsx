import React from 'react';

import Stripe from 'stripe';

import {SUBSCRIBE} from 'utils/stringIds.json';
import {PurchasePlan} from 'utils/types/plans/plans';

import {MonthlyText, PlanCardHeader, PlanCardName, HoverWrapper, CenteredButton, PlanDescription, CardBody} from './styled';

interface PlanCardProps {
  purchaseHandler?: (stripe: Stripe | null) => void;
  purchasePlan: PurchasePlan;
}

function PlanCard({purchasePlan, purchaseHandler}: PlanCardProps): JSX.Element {
  return (
    <HoverWrapper>
      <PlanCardHeader backgroundcolor={purchasePlan.backgroundColor}>
        <PlanCardName>{purchasePlan.title}</PlanCardName>
        <PlanCardName>
          {purchasePlan.cost}
          <MonthlyText>/mo</MonthlyText>
        </PlanCardName>
      </PlanCardHeader>
      <CardBody>
        <PlanDescription>{purchasePlan.description}</PlanDescription>
        <CenteredButton variant="outline-secondary" onClick={purchaseHandler}>
          {SUBSCRIBE}
        </CenteredButton>
      </CardBody>
    </HoverWrapper>
  );
}

export default PlanCard;
