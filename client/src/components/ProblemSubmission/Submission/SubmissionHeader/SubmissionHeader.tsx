import React from 'react';

import SubmissionButtonsContainer from 'components/ProblemSubmission/containers/SubmissionButtons/SubmissionButtonsContainer';
import SubmissionVerdictContainer from '../../containers/SubmissionVerdict/SubmissionVerdictContainer';

import {FloatRightButtons, HeaderContainer} from './styled';

function SubmissionHeader(): JSX.Element {
  return (
    <HeaderContainer>
      <SubmissionVerdictContainer />
      <FloatRightButtons>
        <SubmissionButtonsContainer />
      </FloatRightButtons>
    </HeaderContainer>
  );
}

export default SubmissionHeader;
