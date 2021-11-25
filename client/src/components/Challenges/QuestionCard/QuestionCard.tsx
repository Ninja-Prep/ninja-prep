import React from 'react';

import FadeIn from 'react-fade-in';
import {ChallengeLink} from 'utils/types/challenges';

import {FlexContainer, IconWrapper, QuestionBody, FlexRow, FlexCol, QuestionTitleLink} from './styled';
import QuestionCardIcon from '../QuestionCardIcon/QuestionCardIcon';
import QuestionCardTitle from '../QuestionCardTitle/QuestionCardTitle';

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
              <QuestionCardTitle challenge={props.challenge} />
              <QuestionBody>{props.challenge.previewDescription}</QuestionBody>
            </QuestionTitleLink>
          </FlexCol>
        </FlexRow>
      </FlexContainer>
    </FadeIn>
  );
};

export default QuestionCard;
