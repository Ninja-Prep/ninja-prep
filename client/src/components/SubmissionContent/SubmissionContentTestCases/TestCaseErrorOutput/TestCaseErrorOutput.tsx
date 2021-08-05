import React from 'react';

import ContentDetailBlock from '../TestCaseContent/ContentDetailBlock/ContentDetailBlock';
import {ErrorOutputContainer} from './styled';

interface ErrorProps {
  content: string;
}

function TestCaseErrorOutput(props: ErrorProps): JSX.Element {
  return (
    <ErrorOutputContainer>
      <ContentDetailBlock
        blockHeader={'Raw Output'}
        blockContent={props.content}
      />
    </ErrorOutputContainer>
  );
}

export default TestCaseErrorOutput;
