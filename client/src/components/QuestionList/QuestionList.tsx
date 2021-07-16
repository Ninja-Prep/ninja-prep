import React from 'react';

import QuestionCard from 'components/QuestionCard/QuestionCard';
import FadeIn from 'react-fade-in';
import {ChallengeLink} from 'utils/types/challenges';

const QuestionList = (props: {
  challengeLinks: ChallengeLink[];
}): JSX.Element => {
  return (
    <FadeIn delay={250} transitionDuration={450}>
      {props.challengeLinks.map((challenge: ChallengeLink) => {
        return (
          <QuestionCard
            questionTitle={challenge.title}
            path={challenge.problemPath}
          />
        );
      })}
    </FadeIn>
  );
};

export default QuestionList;
