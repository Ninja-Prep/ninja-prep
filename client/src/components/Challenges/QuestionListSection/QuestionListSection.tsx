import React from 'react';

import {ChallengeLink} from 'utils/types/challenges';

import {CategoryTitle, SectionContainer, QuestionCardContainer} from './styled';
import QuestionCard from '../QuestionCard/QuestionCard';

interface Props {
  challengeLinks: ChallengeLink[];
  isPremiumUser?: boolean;
  categoryTitle: string;
  categoryFilter: string;
}

const QuestionListSection = (props: Props): JSX.Element => {
  return (
    <SectionContainer>
      <CategoryTitle>{props.categoryTitle}</CategoryTitle>
      <QuestionCardContainer>
        {props.challengeLinks
          .filter((challenge) => {
            return challenge.questionCategory === props.categoryFilter;
          })
          .map((challenge: ChallengeLink) => {
            return <QuestionCard key={challenge.title} challenge={challenge} isPremiumUser={props.isPremiumUser} />;
          })}
      </QuestionCardContainer>
    </SectionContainer>
  );
};

export default QuestionListSection;
