import React from 'react';

import {Link} from 'react-router-dom';
import {ChallengeLink} from 'utils/types/challenges';

import {FlexContainer, IconWrapper, QuestionTitleLink, QuestionTitle, QuestionBody, FlexRow, FlexCol} from './styled';
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
        <FlexRow>
          <IconWrapper>
            <QuestionCardIcon isPremiumUser={props.isPremiumUser} isFreeProblem={props.challenge.isFree} isCompletedProblem={props.challenge.isCompleted} />
          </IconWrapper>
          <FlexCol>
            <QuestionTitleLink to={'/problem/' + props.challenge.problemPath}>
              <QuestionTitle>{props.challenge.title}</QuestionTitle>
            </QuestionTitleLink>
            <QuestionBody>{props.challenge.previewDescription}</QuestionBody>
          </FlexCol>
        </FlexRow>
      </FlexContainer>
    </FadeIn>
  );
};

export default QuestionCard;
