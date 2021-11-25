import React from 'react';

import FadeIn from 'react-fade-in';
import {ChallengeLink} from 'utils/types/challenges';
import QuestionListSection from '../QuestionListSection/QuestionListSection';

interface Props {
  challengeLinks: ChallengeLink[];
  isPremiumUser?: boolean;
}

const QuestionList = (props: Props): JSX.Element => {
  return (
    <FadeIn>
      <QuestionListSection {...props} categoryTitle="Arrays" categoryFilter="Arrays" />
      <QuestionListSection {...props} categoryTitle="Linked Lists" categoryFilter="LinkedLists" />
      <QuestionListSection {...props} categoryTitle="Trees" categoryFilter="Trees" />
    </FadeIn>
  );
};

export default QuestionList;
