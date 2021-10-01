import React, {Fragment} from 'react';

import QuestionList from 'containers/QuestionList/QuestionList';
import {CHALLENGES_NAVIGATION} from 'utils/stringIds.json';

import {ProblemsHeader, BackgroundContainer, ContentContainer, HeaderFont, PremiumButtonFlex} from './styled';
import {GetFullAccessButton} from 'uiLibrary/Buttons';

function ChallengesPage(): JSX.Element {
  return (
    <BackgroundContainer>
      <ContentContainer>
        <ProblemsHeader>
          <HeaderFont>{CHALLENGES_NAVIGATION}</HeaderFont>
          <PremiumButtonFlex>
            <GetFullAccessButton />
          </PremiumButtonFlex>
        </ProblemsHeader>
        <QuestionList />
      </ContentContainer>
    </BackgroundContainer>
  );
}

export default ChallengesPage;
