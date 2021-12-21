import React from 'react';
import * as Styled from './styled';
import {BY_GOING_PREMIUM, UNLOCK_THIS_PROBLEM} from 'utils/stringIds.json';
import {GetFullAccessButton} from 'uiLibrary/Buttons';

function LockedPremiumProblemSubmission(): JSX.Element {
  return (
    <Styled.HeightWrapper>
      <Styled.LockedPremiumContainer>
        <Styled.PremiumLockIcon />
        <Styled.BoldGetPremiumHeader>{UNLOCK_THIS_PROBLEM}</Styled.BoldGetPremiumHeader>
        <Styled.BoldGetPremiumHeader>{BY_GOING_PREMIUM}</Styled.BoldGetPremiumHeader>
        <Styled.ButtonContainer>
          <GetFullAccessButton sizing="medium" />
        </Styled.ButtonContainer>
      </Styled.LockedPremiumContainer>
    </Styled.HeightWrapper>
  );
}

export default LockedPremiumProblemSubmission;
