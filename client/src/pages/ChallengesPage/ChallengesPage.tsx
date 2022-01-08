import React from 'react';

import {QuestionListContainer} from 'components/Challenges';
import {CHALLENGES_NAVIGATION} from 'utils/stringIds.json';

import {ProblemsHeader, BackgroundContainer, ContentContainer, HeaderFont, PremiumButtonFlex} from './styled';
import {GetFullAccessButton} from 'uiLibrary/Buttons';
import {Adsense} from '@ctrl/react-adsense';

interface Props {
  isPremiumUser: boolean;
}

function ChallengesPage(props: Props): JSX.Element {
  return (
    <BackgroundContainer>
      <Adsense client="ca-pub-6557282319813055" slot="1647330454" style={{display: 'block'}} layout="in-article" format="fluid" />
      <ContentContainer>
        <ProblemsHeader>
          <HeaderFont>{CHALLENGES_NAVIGATION}</HeaderFont>
          {!props.isPremiumUser && (
            <PremiumButtonFlex>
              <GetFullAccessButton />
            </PremiumButtonFlex>
          )}
        </ProblemsHeader>
        <QuestionListContainer />
      </ContentContainer>
    </BackgroundContainer>
  );
}

export default ChallengesPage;
