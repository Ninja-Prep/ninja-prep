import React from 'react';

import CodeSubmissionButtons from 'components/ProblemSubmission/containers/CodeSubmissionButtons/CodeSubmissionButtonsContainer';
import CodeSubmissionVerdictContainer from 'components/ProblemSubmission/containers/CodeSubmissionVerdict/CodeSubmissionVerdictContainer';

import {FloatRightButtons, HeaderContainer} from './styled';

interface Props {
  children?: React.ReactChild;
}

function SubmissionContent(props: Props): JSX.Element {
  return (
    <div>
      <HeaderContainer>
        <CodeSubmissionVerdictContainer />
        <FloatRightButtons>
          <CodeSubmissionButtons />
        </FloatRightButtons>
      </HeaderContainer>
      {props.children}
    </div>
  );
}

export default SubmissionContent;
