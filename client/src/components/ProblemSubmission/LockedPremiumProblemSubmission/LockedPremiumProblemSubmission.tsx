import React from 'react';
import {LockedPremiumContainer, BoldGetPremiumHeader, ExploreProblemsIcon, ButtonContainer, PremiumLockIcon, HeightWrapper} from './styled';
import {GET_PREMIUM_NAVIGATION, BY_GOING_PREMIUM, UNLOCK_THIS_PROBLEM} from 'utils/stringIds.json';
import {Button} from '@mui/material';

function LockedPremiumProblemSubmission(): JSX.Element {
  return (
    <HeightWrapper>
      <LockedPremiumContainer>
        <PremiumLockIcon />
        <BoldGetPremiumHeader>{UNLOCK_THIS_PROBLEM}</BoldGetPremiumHeader>
        <BoldGetPremiumHeader>{BY_GOING_PREMIUM}</BoldGetPremiumHeader>
        <ButtonContainer>
          <a href="/premium">
            <Button>
              {GET_PREMIUM_NAVIGATION}
              <ExploreProblemsIcon />
            </Button>
          </a>
        </ButtonContainer>
      </LockedPremiumContainer>
    </HeightWrapper>
  );
}

export default LockedPremiumProblemSubmission;
