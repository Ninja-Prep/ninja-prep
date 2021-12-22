import React, {MouseEventHandler} from 'react';

import {PremiumButton, LightBlueButton} from 'uiLibrary/CoreUI';

import {SUBSCRIBE} from 'utils/stringIds.json';
import {PurchasePlan} from 'utils/types/plans/plans';
import {BENEFITS_BROWSER_COMPILER, BENEFITS_PREMIUM, BENEFITS_CODE_WALKTHROUGHS} from 'utils/stringIds.json';

import * as Styled from './styled';

interface PlanCardProps {
  purchaseHandler?: MouseEventHandler<HTMLButtonElement>;
  purchasePlan: PurchasePlan;
}

function PlanCard({purchasePlan, purchaseHandler}: PlanCardProps): JSX.Element {
  return (
    <Styled.Container>
      <Styled.CardHeader backgroundColor={purchasePlan.backgroundColor}>
        <div>
          <h2>{purchasePlan.title}</h2>
        </div>
        <div>
          <h2>{purchasePlan.cost}</h2>
        </div>
      </Styled.CardHeader>
      <Styled.Card>
        {purchasePlan.bestValue ? <Styled.BestValue>Best Value</Styled.BestValue> : <Styled.BestValue>Standard</Styled.BestValue>}
        <Styled.CardBody>
          <Styled.PlanDescription>
            <Styled.BenefitsGradeIcon />
            {BENEFITS_PREMIUM}
          </Styled.PlanDescription>
          <Styled.PlanDescription>
            <Styled.BenefitsCodeIcon />
            {BENEFITS_CODE_WALKTHROUGHS}
          </Styled.PlanDescription>
          <Styled.PlanDescription>
            <Styled.BenefitsBoltIcon />
            {BENEFITS_BROWSER_COMPILER}
          </Styled.PlanDescription>
          <Styled.PlanDescription>{purchasePlan.description}</Styled.PlanDescription>
          <Styled.SubscribeButton>
            {purchasePlan.bestValue ? <PremiumButton onClick={purchaseHandler}>{SUBSCRIBE}</PremiumButton> : <LightBlueButton onClick={purchaseHandler}>{SUBSCRIBE}</LightBlueButton>}
          </Styled.SubscribeButton>
        </Styled.CardBody>
      </Styled.Card>
    </Styled.Container>
  );
}

export default PlanCard;
