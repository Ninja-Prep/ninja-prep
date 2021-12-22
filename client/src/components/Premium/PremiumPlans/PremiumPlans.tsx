import * as React from 'react';

import PremiumPlanCardContainer from '../containers/PremiumPlanCard/PremiumPlanCardContainer';

import {OUR_PLANS} from 'utils/stringIds.json';
import {planCards} from 'utils/types/plans/plans';
import * as Styled from './styled';
import {HeadingFont} from 'uiLibrary/Fonts';

function PremiumPlans(): JSX.Element {
  return (
    <Styled.Container>
      <HeadingFont>{OUR_PLANS}</HeadingFont>
      <Styled.CardContainer>
        {planCards.map((plan, key) => (
          <Styled.Card>
            <PremiumPlanCardContainer purchasePlan={plan} key={key} />
          </Styled.Card>
        ))}
      </Styled.CardContainer>
    </Styled.Container>
  );
}

export default PremiumPlans;
