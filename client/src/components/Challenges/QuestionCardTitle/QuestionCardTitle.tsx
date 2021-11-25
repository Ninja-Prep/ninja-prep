import React from 'react';

import {ChallengeLink} from 'utils/types/challenges';
import {QuestionTitle, FreeTag} from './styled';

interface Props {
  challenge: ChallengeLink;
}

const QuestionCardTitle = (props: Props): JSX.Element => {
  return (
    <QuestionTitle>
      {!props.challenge.isCompleted && props.challenge.isFree && <FreeTag>FREE</FreeTag>}
      {props.challenge.title}
    </QuestionTitle>
  );
};

export default QuestionCardTitle;
