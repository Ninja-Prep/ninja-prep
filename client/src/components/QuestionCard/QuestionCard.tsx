import React from 'react';

import {Link} from 'react-router-dom';
import {ChallengeLink} from 'utils/types/challenges';

import {FlexContainer, IconWrapper, QuestionTitleLink, QuestionTitle, QuestionBody} from './styled';
import QuestionCardIcon from 'components/QuestionCardIcon/QuestionCardIcon';
import FadeIn from 'react-fade-in';

interface Props {
  challenge: ChallengeLink;
  isPremiumUser?: boolean;
}

const QuestionCard = (props: Props): JSX.Element => {
  return (
    <FadeIn>
      <FlexContainer>
        <QuestionTitleLink to={'/problem/' + props.challenge.problemPath}>
          <IconWrapper>
            <QuestionCardIcon isPremiumUser={props.isPremiumUser} isFreeProblem={props.challenge.isFree} isCompletedProblem={props.challenge.isCompleted} />
          </IconWrapper>
          <QuestionTitle>{props.challenge.title}</QuestionTitle>
        </QuestionTitleLink>
        <QuestionBody>Placeholder content when question body will be added</QuestionBody>
      </FlexContainer>
    </FadeIn>
  );
};

export default QuestionCard;
