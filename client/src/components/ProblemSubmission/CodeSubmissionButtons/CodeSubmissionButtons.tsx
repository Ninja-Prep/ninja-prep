import React from 'react';

import {Button} from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {SUBMIT_CODE} from 'utils/stringIds.json';

import {FloatRight} from './styled';

interface Props {
  submitHandler: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

function CodeSubmissionButtons({submitHandler}: Props): JSX.Element {
  return (
    <FloatRight>
      <Button onClick={(e) => submitHandler(e)}>
        <PlayArrowIcon />
        <b>{SUBMIT_CODE}</b>
      </Button>
    </FloatRight>
  );
}

export default CodeSubmissionButtons;
