import React from 'react';

import Stripe from 'stripe';
import {SUBSCRIBE} from 'utils/stringIds.json';

import {PurchasePlan} from 'utils/types/plans/plans';
import {CardBody} from './styled';
import {MonthlyText, PlanCardHeader, PlanCardName, HoverWrapper, CenteredButton, PlanDescription} from './styled';

interface PlanCardProps {
  purchaseHandler: (stripe: Stripe | null) => void;
  purchasePlan: PurchasePlan;
}

function PlanCard({purchasePlan, purchaseHandler}: PlanCardProps): JSX.Element {
  return (
    <HoverWrapper>
      <PlanCardHeader backgroundColor={purchasePlan.backgroundColor}>
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
