import React from 'react';

import Stripe from 'stripe';
import {SUBSCRIBE} from 'utils/stringIds.json';
import {StripeInterface} from 'utils/types/plans';

import {CardBody} from './styled';
import {
  MonthlyText,
  PlanCardHeader,
  PlanCardName,
  HoverWrapper,
  CenteredButton,
  PlanDescription,
} from './styled';

interface PlanCardProps extends StripeInterface {
  purchaseHandler: (urlString: string, stripe: Stripe | null) => void;
}

function PlanCard(props: PlanCardProps): JSX.Element {
  return (
    <HoverWrapper>
      <PlanCardHeader backgroundColor={props.title}>
        <PlanCardName>{props.title}</PlanCardName>
        <PlanCardName>
          {props.cost}
          <MonthlyText>/mo</MonthlyText>
        </PlanCardName>
      </PlanCardHeader>
      <CardBody>
        <PlanDescription>{props.description}</PlanDescription>
        <CenteredButton
          variant="outline-secondary"
          onClick={props.purchaseHandler}
        >
          {SUBSCRIBE}
        </CenteredButton>
      </CardBody>
    </HoverWrapper>
  );
}

export default PlanCard;
