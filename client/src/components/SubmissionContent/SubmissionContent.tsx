import React from 'react';

import CodeSubmissionButtons from 'containers/CodeSubmissionButtons/CodeSubmissionButtons';
import CodeSubmissionVerdictContainer from 'containers/CodeSubmissionVerdict/CodeSubmissionVerdict';

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
