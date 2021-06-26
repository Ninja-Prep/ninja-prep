import React from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';
import {PROCESSING_TEXT} from 'utils/stringIds.json';

import {BlinkText} from './styled';

const CodeSubmissionLoadBar = (): JSX.Element => {
  return (
    <div>
      <BlinkText>{PROCESSING_TEXT}</BlinkText>
      <LinearProgress />
    </div>
  );
};

export default CodeSubmissionLoadBar;
