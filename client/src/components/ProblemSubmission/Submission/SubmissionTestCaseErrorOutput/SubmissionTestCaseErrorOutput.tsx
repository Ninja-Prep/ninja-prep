import React from 'react';

import ContentDetailBlock from '../ContentDetailBlock/ContentDetailBlock';
import {ErrorOutputContainer} from './styled';

interface ErrorProps {
  content: string;
}

function SubmissionTestCaseErrorOutput(props: ErrorProps): JSX.Element {
  return (
    <ErrorOutputContainer>
      <ContentDetailBlock blockHeader={'Raw Output'} blockContent={props.content} />
    </ErrorOutputContainer>
  );
}

export default SubmissionTestCaseErrorOutput;
