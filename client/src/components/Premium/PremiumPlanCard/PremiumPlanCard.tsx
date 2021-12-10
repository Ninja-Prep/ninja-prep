import React, {MouseEventHandler} from 'react';

import {LightBlueButton} from 'uiLibrary/CoreUI';

import {SUBSCRIBE} from 'utils/stringIds.json';
import {PurchasePlan} from 'utils/types/plans/plans';

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
        <Styled.CardBody>
          <Styled.PlanDescription>{purchasePlan.description}</Styled.PlanDescription>
          <LightBlueButton onClick={purchaseHandler}>{SUBSCRIBE}</LightBlueButton>
        </Styled.CardBody>
      </Styled.Card>
    </Styled.Container>
  );
}

export default PlanCard;
