import React from 'react';

import QuestionCard from 'components/QuestionCard/QuestionCard';
import FadeIn from 'react-fade-in';
import {ChallengeLink} from 'utils/types/challenges';

interface Props {
  challengeLinks: ChallengeLink[];
  isPremiumUser?: boolean;
}

const QuestionList = (props: Props): JSX.Element => {
  return (
    <FadeIn>
      {props.challengeLinks.map((challenge: ChallengeLink) => {
        return <QuestionCard challenge={challenge} isPremiumUser={props.isPremiumUser} />;
      })}
    </FadeIn>
  );
};

export default QuestionList;
