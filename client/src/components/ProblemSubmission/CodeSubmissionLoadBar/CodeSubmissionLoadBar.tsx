import React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import {PROCESSING_TEXT} from 'utils/stringIds.json';

import * as Styled from './styled';

const CodeSubmissionLoadBar = (): JSX.Element => {
  return (
    <Styled.BoxContainer>
      <CircularProgress disableShrink />
      <Styled.BlinkContainer>
        <Styled.BlinkText>{PROCESSING_TEXT}</Styled.BlinkText>
      </Styled.BlinkContainer>
    </Styled.BoxContainer>
  );
};

export default CodeSubmissionLoadBar;
