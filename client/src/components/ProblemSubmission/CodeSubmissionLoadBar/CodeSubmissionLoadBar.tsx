import React from 'react';

import LinearProgress from '@mui/material/LinearProgress';
import {PROCESSING_TEXT} from 'utils/stringIds.json';

import {BlinkContainer, BlinkText} from './styled';

const CodeSubmissionLoadBar = (): JSX.Element => {
  return (
    <div>
      <BlinkContainer>
        <BlinkText>{PROCESSING_TEXT}</BlinkText>
      </BlinkContainer>
      <LinearProgress />
    </div>
  );
};

export default CodeSubmissionLoadBar;
