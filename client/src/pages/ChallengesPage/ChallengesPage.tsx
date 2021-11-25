import React from 'react';

import {QuestionListContainer} from 'components/Challenges';
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
        <QuestionListContainer />
      </ContentContainer>
    </BackgroundContainer>
  );
}

export default ChallengesPage;
