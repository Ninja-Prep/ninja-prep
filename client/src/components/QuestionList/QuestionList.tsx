import React from 'react';

import QuestionCard from 'components/QuestionCard/QuestionCard';
import FadeIn from 'react-fade-in';
import {ChallengeLink} from 'utils/types/challenges';
import QuestionListSection from 'components/QuestionListSection/QuestionListSection';

interface Props {
  challengeLinks: ChallengeLink[];
  isPremiumUser?: boolean;
}

const QuestionList = (props: Props): JSX.Element => {
  return (
    <FadeIn>
      <QuestionListSection {...props} categoryTitle="Arrays" />
      <QuestionListSection {...props} categoryTitle="Linked Lists" />
      <QuestionListSection {...props} categoryTitle="Trees" />
    </FadeIn>
  );
};

export default QuestionList;
