import React from 'react';

import {QuestionListContainer} from 'components/Challenges';
import {CHALLENGES_NAVIGATION} from 'utils/stringIds.json';

import {ProblemsHeader, BackgroundContainer, ContentContainer, HeaderFont, PremiumButtonContainer} from './styled';
import {GetFullAccessButton} from 'uiLibrary/Buttons';

interface Props {
  isPremiumUser: boolean;
}

function ChallengesPageMobile(props: Props): JSX.Element {
  return (
    <BackgroundContainer>
      <ContentContainer>
        <ProblemsHeader>
          <HeaderFont>{CHALLENGES_NAVIGATION}</HeaderFont>
          {!props.isPremiumUser && (
            <PremiumButtonContainer>
              <GetFullAccessButton />
            </PremiumButtonContainer>
          )}
        </ProblemsHeader>
        <QuestionListContainer />
      </ContentContainer>
    </BackgroundContainer>
  );
}

export default ChallengesPageMobile;
