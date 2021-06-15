import React from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';

import {PROCESSING_TEXT} from './TestCaseAreaStringIds';

const CodeSubmissionLoadBar = () => {
  return (
    <div>
      <p className="h5 font-weight-bold p-3 text-dark blink-processing">
        {PROCESSING_TEXT}
      </p>
      <LinearProgress />
    </div>
  );
};

export default CodeSubmissionLoadBar;
