import React from 'react';

import QuestionCard from 'components/QuestionCard/QuestionCard';
import {ChallengeLink} from 'utils/types/challenges';
import {CategoryTitle, SectionContainer, QuestionCardContainer} from './styled';

interface Props {
  challengeLinks: ChallengeLink[];
  isPremiumUser?: boolean;
  categoryTitle: string;
  categoryFilter?: string;
}

const QuestionListSection = (props: Props): JSX.Element => {
  return (
    <SectionContainer>
      <CategoryTitle>{props.categoryTitle}</CategoryTitle>
      <QuestionCardContainer>
        {props.challengeLinks.map((challenge: ChallengeLink) => {
          return <QuestionCard challenge={challenge} isPremiumUser={props.isPremiumUser} />;
        })}
      </QuestionCardContainer>
    </SectionContainer>
  );
};

export default QuestionListSection;
