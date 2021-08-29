import React from 'react';

import {Link} from 'react-router-dom';
import {ChallengeLink} from 'utils/types/challenges';

import {IconWrapper, CardRow, QuestionTitle} from './styled';
import QuestionCardIcon from 'components/QuestionCardIcon/QuestionCardIcon';

interface Props {
  challenge: ChallengeLink;
  isPremiumUser?: boolean;
}

const QuestionCard = (props: Props): JSX.Element => {
  return (
    <CardRow>
      <IconWrapper xs={2}>
        <QuestionCardIcon isPremiumUser={props.isPremiumUser} isFreeProblem={props.challenge.isFree} isCompletedProblem={props.challenge.isCompleted} />
      </IconWrapper>
      <QuestionTitle>
        <Link to={'/problem/' + props.challenge.problemPath}>{props.challenge.title}</Link>
      </QuestionTitle>
    </CardRow>
  );
};

export default QuestionCard;
